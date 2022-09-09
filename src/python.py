import json
import os
result =[]
with open('details.json', 'r+') as f:
    data = json.load(f)
    id = 1
    for i in data.keys():
        index = 1;
        for j in range(len(data[i])):
            data[i][j]["curriculum_context"]["data"]["description"] =  [
        {"_index":1,"data":"Do you want to become a programmer? Do you want to learn how to create games, automate your browser, visualize data, and much more?"},
        {"_index":2,"data":"If you’re looking to learn Python for the very first time or need a quick brush-up, this is the course for you!"},
        {"_index":3,"data":"Python has rapidly become one of the most popular programming languages around the world. Compared to other languages such as Java or C++, Python consistently outranks and outperforms these languages in demand from businesses and job availability. The average Python developer makes over $100,000 - this number is only going to grow in the coming years."},
        {"_index":4,"data":"The best part? Python is one of the easiest coding languages to learn right now. It doesn’t matter if you have no programming experience or are unfamiliar with the syntax of Python. By the time you finish this course, you'll be an absolute pro at programming!"},
        {"_index":5,"data":"As an instructor and student on Udemy for almost 4 years, I know what it’s like to be overwhelmed with boring and mundane. I promise you’ll have a blast learning the ins and outs of python. I’ve successfully taught over 200,000+ students from over 200 countries jumpstart their programming journeys through my courses."},
        {"_index":6,"data":"So what are you waiting for? Jumpstart your programming journey and dive into the world of Python by enrolling in this course today!"}
      ]
    f.seek(0)        
    json.dump(data, f, indent=4)
    f.truncate()     
