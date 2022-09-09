import json
import os
result =[]
with open('HomePageCourses.json', 'r+') as f:
    data = json.load(f)
    data = data["data"]
    id = 1
    for i in data.keys():
        index = 1;
        for j in range(len(data[i]["items"])):
            data[i]["items"][j]["timeToEndDisc"] = 1;
    f.seek(0)        
    json.dump(data, f, indent=4)
    f.truncate()     
