renderScoreboardTeamScore = _.template($("#scoreboard-teamscore-template").remove().text())
renderScoreboardTabs = _.template($("#scoreboard-tabs-template").remove().text())
renderScoreboard = _.template($("#scoreboard-template").remove().text())

load_scoreboard = ->

    $.get "/api/stats/scoreboard", (data) ->
        switch data["status"]
            when 1
                $("#scoreboard-tabs").html renderScoreboardTabs({
                    data: data.data
                    renderScoreboard: renderScoreboard
                })

                window.drawTopTeamsProgressionGraph "#top-team-score-progression-graph"
            when 0
                apiNotify(data)

$ ->
    if $("#scoreboard-tabs")
        load_scoreboard()
