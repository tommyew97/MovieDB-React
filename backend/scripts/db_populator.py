import csv
from movies.models import Movie

def populate():
    start = True
    count_added = 0
    count_total = 0
    bad_data = [147, 157, 155, 290, 59, 277, 143, 178, 275, 191, 201, 126, 99, 279, 164, 110, 112, 220, 117, 226, 243,
                 229, 282, 124, 241, 149, 246, 132, 196, 242, 37, 249, 295, 173, 182, 224, 103, 104, 252, 102, 63, 174,
                 193, 170, 266, 216, ]
    with open('scripts/movies.csv', encoding='utf8') as f:
        reader = csv.reader(f)
        for row in reader:
            count_total += 1
            if start or count_total in bad_data or len(row[0]) > 25:
                start = False
                continue
            if count_total > 300:
                print("Done, inserted " + str(count_added) + " of " + str(count_total) + " into database.")
                return
            try:
                mins = int(row[4].split()[0])
            except:
                continue
            if count_total % 10 == 0:
                print("Added " + str(count_added) + " of " + str(count_total))
            count_added += 1
            _, created = Movie.objects.get_or_create(
                title=row[0],
                genre=row[5],
                year=row[1],
                length=mins,
                description=row[9],
                image=row[13]
            )
    print("Done, inserted " + str(count_added) + " of " + str(count_total) + " into database.")


populate()
