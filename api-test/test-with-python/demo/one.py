import os
os.environ["name"]="taoli"
result =os.getenv("name")
# print (result)

import csv
import json


def readCsv():
    current_file_path = os.path.abspath(__file__)
    base_folder = os.path.dirname(current_file_path)
    csvPath=os.path.join(base_folder,'taoli.csv')
    with open(csvPath,mode='r',newline='',encoding='utf-8') as csvFile:
        reader=csv.reader(csvFile)
        headers= next(reader)
        rows=list(reader)
    print(headers)    
    for row in rows:
        print(row)     
readCsv()      


def readjson():
    with open("./config.json") as jsonFile:
        data=json.load(jsonFile)
        print (data)


def getPath():
    current_file_path = os.path.abspath(__file__)
    base_folder = os.path.dirname(current_file_path)
    print(current_file_path)
    print(base_folder)

getPath()


        

