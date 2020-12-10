import csv

def populate():
    start = True
    count_added = 0
    count_total = 0
    print(123)
    with open('scripts/movies.csv', encoding='utf8') as f:
        reader = csv.reader(f)
        for row in reader:

            count_total += 1
            if count_total == 147:
                print("Title: " + row[0] + " , Year: " + row[1] + " , Runtime: " + row[4] + " , Genre: " + row[5] + " , Description: " + row[9] + " , Image: " + row[13])
            if start:
                start = False
                continue
            try:
                mins = int(row[5].split()[0])
            except:
                continue
            if count_total % 10 == 0:
                print("Added " + str(count_added) + " of " + str(count_total))
            print(row[1],row[6],row[2],mins,row[10])
    print("Done, inserted " + str(count_added) + " of " + str(count_total) + " into database.")

populate()