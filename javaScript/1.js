var result=[
{
    "item1": {
        "sourceUuid": "5599ffac-4b99-47c7-9370-a25e7e465429",
        "targetUuid": "5599ffac-4b99-47c7-9370-a25e7effffff"
    }
},
{
    "item2": {
        "sourceUuid": "bf63fe50-8b2b-488d-b565-009fcaebdb45",
        "targetUuid": "-1"
    }
},
{
    "item3": {
        "sourceUuid": "0005fd96-f654-4781-8602-09fedc0cdd35",
        "targetUuid": "0005fd96-f654-4781-8602-09fedc0cdd35"
    }
}
]
for (var i=0;i<result.length;i++)
{
    alert(result.length)
for (x in result[i])
{
	if (x=="item3")
	alert(result[i][x].sourceUuid)
	else if (i==result.length)
		alert("not found")
}
}


