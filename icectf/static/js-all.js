var divFromSelector, load_scoreboard, maxValuesFromBucketsExtended, progressionDataToPoints, renderScoreboard, renderScoreboardTabs, renderScoreboardTeamScore, teamGraphOptions, timestampsToBuckets, topTeamsGraphOptions;

$(function() {
  $('.button-collapse').sideNav();
  return $('.countdown').TimeCircles({
    use_background: false,
    time: {
      Days: {
        color: '#3489ff'
      },
      Hours: {
        color: '#3489ff'
      },
      Minutes: {
        color: '#3489ff'
      },
      Seconds: {
        color: '#3489ff'
      }
    }
  });
});

google.load('visualization', '1.0', {
  'packages': ['corechart']
});

divFromSelector = function(selector) {
  return _.first($(selector));
};

topTeamsGraphOptions = {
  title: "Top Team Score Progression",
  legend: {
    position: "top"
  },
  vAxis: {
    title: "Score"
  },
  hAxis: {
    ticks: []
  },
  pointSize: 3,
  areaOpacity: 0.0,
  enableInteractivity: true
};

teamGraphOptions = {
  title: "Team Score Progression",
  legend: {
    position: "none"
  },
  vAxis: {
    title: "Score"
  },
  hAxis: {
    ticks: []
  },
  pointSize: 3
};

timestampsToBuckets = function(samples, key, min, max, seconds) {
  var bucketNumber, buckets, continuousBucket, i, j, maxBuckets, ref;
  bucketNumber = function(number) {
    return Math.floor((number - min) / seconds);
  };
  continuousBucket = {};
  maxBuckets = bucketNumber(max);
  for (i = j = 0, ref = maxBuckets; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
    continuousBucket[i] = [];
  }
  buckets = _.groupBy(samples, function(sample) {
    return bucketNumber(sample[key]);
  });
  return _.extend(continuousBucket, buckets);
};

maxValuesFromBucketsExtended = function(buckets, sampleKey) {
  var lastInsertedValue, maxValues;
  maxValues = [];
  lastInsertedValue = 0;
  _.each(buckets, function(samples) {
    var maxValue, values;
    values = _.pluck(samples, sampleKey);
    if (values.length > 0) {
      maxValue = _.max(values);
      maxValues.push(maxValue);
      return lastInsertedValue = maxValue;
    } else {
      return maxValues.push(lastInsertedValue);
    }
  });
  return maxValues;
};

progressionDataToPoints = function(data, dataPoints, currentDate) {
  var bucketWindow, dataSets, lastTime, max, min, sortedData;
  if (currentDate == null) {
    currentDate = 0;
  }
  sortedData = _.sortBy(_.flatten(data), function(submission) {
    return submission.time;
  });
  min = _.first(sortedData).time - 60 * 5;
  lastTime = _.last(sortedData).time;
  max = currentDate === 0 ? lastTime : Math.min(lastTime + 3600 * 24, currentDate);
  bucketWindow = Math.max(Math.floor((max - min) / dataPoints), 1);
  dataSets = [];
  _.each(data, function(teamData) {
    var buckets, steps;
    buckets = timestampsToBuckets(teamData, "time", min, max, bucketWindow);
    steps = maxValuesFromBucketsExtended(buckets, "score");
    if (steps.length > dataPoints) {
      steps = _.rest(steps, steps.length - dataPoints);
    }
    return dataSets.push(steps);
  });
  if (dataSets.length > 1) {
    return dataSets;
  } else {
    return _.first(dataSets);
  }
};

this.drawTopTeamsProgressionGraph = function(selector) {
  var div;
  div = divFromSelector(selector);
  return $.get("/api/stats/top_teams/score_progression", function(data) {
    return $.get("/api/time", function(timedata) {
      var chart, dataPoints, graphData, packagedData, scoreData, team, teamNameData;
      if (data.data.length >= 2 && $(selector).is(":visible")) {
        scoreData = (function() {
          var j, len, ref, results;
          ref = data.data;
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            team = ref[j];
            results.push(team.score_progression);
          }
          return results;
        })();
        if (_.max(_.map(scoreData, function(submissions) {
          return submissions.length;
        })) > 0) {
          dataPoints = _.zip.apply(_, progressionDataToPoints(scoreData, 720, timedata.data));
          teamNameData = (function() {
            var j, len, ref, results;
            ref = data.data;
            results = [];
            for (j = 0, len = ref.length; j < len; j++) {
              team = ref[j];
              results.push(team.name);
            }
            return results;
          })();
          graphData = [["Score"].concat(teamNameData)];
          _.each(dataPoints, function(dataPoint) {
            return graphData.push([""].concat(dataPoint));
          });
          packagedData = google.visualization.arrayToDataTable(graphData);
          chart = new google.visualization.SteppedAreaChart(div);
          return chart.draw(packagedData, topTeamsGraphOptions);
        }
      }
    });
  });
};

this.drawTeamProgressionGraph = function(selector, container_selector) {
  var div;
  div = divFromSelector(selector);
  return $.get("/api/stats/team/score_progression", function(data) {
    return $.get("/api/time", function(timedata) {
      var chart, graphData, j, len, packagedData, score, steps;
      if (data.status === 1) {
        if (data.data.length > 0) {
          graphData = [
            [
              "Time", "Score", {
                role: "tooltip"
              }
            ]
          ];
          steps = progressionDataToPoints(data.data, 720, timedata.data);
          for (j = 0, len = steps.length; j < len; j++) {
            score = steps[j];
            graphData.push(["", score, score]);
          }
          packagedData = google.visualization.arrayToDataTable(graphData);
          chart = new google.visualization.SteppedAreaChart(div);
          return chart.draw(packagedData, teamGraphOptions);
        } else {
          return $(container_selector).hide();
        }
      } else {
        return $(container_selector).hide();
      }
    });
  });
};

$(document).ready(function() {
  $('#crypt').click(function() {
    $('#s_content').html($(this).next("div.solution").html());
    $('#solutions').openModal();
    return false;
  });
  $('#expl').click(function() {
    $('#s_content').html($(this).next("div.solution").html());
    $('#solutions').openModal();
    return false;
  });
  $('#fore').click(function() {
    $('#s_content').html($(this).next("div.solution").html());
    $('#solutions').openModal();
    return false;
  });
  $('#prog').click(function() {
    $('#s_content').html($(this).next("div.solution").html());
    $('#solutions').openModal();
    return false;
  });
  $('#recon').click(function() {
    $('#s_content').html($(this).next("div.solution").html());
    $('#solutions').openModal();
    return false;
  });
  return $('#misc').click(function() {
    $('#s_content').html($(this).next("div.solution").html());
    $('#solutions').openModal();
    return false;
  });
});

renderScoreboardTeamScore = _.template($("#scoreboard-teamscore-template").remove().text());

renderScoreboardTabs = _.template($("#scoreboard-tabs-template").remove().text());

renderScoreboard = _.template($("#scoreboard-template").remove().text());

load_scoreboard = function() {
  return $.get("/api/stats/scoreboard", function(data) {
    switch (data["status"]) {
      case 1:
        $("#scoreboard-tabs").html(renderScoreboardTabs({
          data: data.data,
          renderScoreboard: renderScoreboard
        }));
        return window.drawTopTeamsProgressionGraph("#top-team-score-progression-graph");
      case 0:
        return apiNotify(data);
    }
  });
};

$(function() {
  if ($("#scoreboard-tabs")) {
    return load_scoreboard();
  }
});

$(document).ready(function() {
  return $('form.contact').submit(function() {
    var form;
    form = $(this);
    $('button', form).toggleClass('disabled indigo darken-2 waves-effect waves-light').attr('disabled', true);
    $.ajax({
      type: 'POST',
      url: $(this).attr('action'),
      data: $(this).serialize(),
      success: function(data) {
        if (data.success === 1) {
          form[0].reset();
          form.find('i, label').removeClass('active');
          form.find('input').blur();
        }
        Materialize.toast(data.message, data.message.length * 500);
        return setTimeout((function() {
          return $('button', form).toggleClass('disabled indigo darken-2 waves-effect waves-light').attr('disabled', false);
        }), 500);
      },
      error: function(xhr, opts, err) {
        $('button', form).toggleClass('disabled indigo darken-2 waves-effect waves-light').attr('disabled', false);
        return Materialize.toast("An error occured, please try again later.", 1500);
      }
    });
    return false;
  });
});
