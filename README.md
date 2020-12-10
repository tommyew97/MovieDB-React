[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://gitlab.stud.idi.ntnu.no/it2810-h20/team-75/prosjekt-3)
# Prosjekt 3
I dette prosjektet har vi laget en filmdatabase inspirert av Imdb. Man kan lage søke etter filmer og 
se alle filmene som ligger i databasen. Videre kan man filtrere disse filmene etter sjanger og årstall,
 og man kan også sortere dem etter tittel/utgivelsesår/lengde. Man kan også se detaljer om hver enkeltfilm
 og legge inn anmeldelser. For å legge inn en anmeldelse må du ha laget en bruker og være logget inn. 

## Stack
Vi har laget prosjektet med React i frontend og Django i backend
For å kommunisere bruker de et tradisjonelt REST-api
Backend kjører på VM på NTNU sine servere

### Frontend
Frontend er laget i React
Redux er brukt for state management
Cypress er brukt til end-2-end og komponent testing.
Andre viktige tredjepartsbiblioteker er:
- react-router-dom for routing av urls
- typescript for type enforcement
- react-bootstrap for diverse layout-komponenter
- axios for å gjøre REST-requests
- react-hook-form for forms

### Backend
Backend er laget i Django
For å håndtere REST-requests har vi hovedsakelig vært avhengige av django_rest_framework.
Andre viktige biblioteker er:
- django_cors_headers for å fikse Cross-Origin Requests 
- django_extensions for å kjøre script som legger til filmer i databasen
- django_filters for å bruke filters i REST-queries

### VM
Backend kjører på en virtual machine på NTNU sine servere.
For å oppnå dette har vi brukt ssh og tmux for å la prosessen kjøre etter at man avslutter
Backend server også frontend dersom man går på http://it2810-75.idi.ntnu.no:8000.
Databasen er en MySQL-database med connection til Django. 

## Hvordan kjøre lokalt
### Frontend
- Naviger til Frontend folderet.
- Kjør npm install
- Dobbeltsjekk at URL-en under api/axiosREST.js er satt til 127.0.0.1 og ikke VM
  (For å koble til VM sin database må den være http://it2810-75.idi.ntnu.no:8000)
- Kjør npm start
    - Deretter kan du npm run cypress:open for å vise testene


### Backend
- Naviger til backend folderet
- Installer nødvendige biblioteker ved å bruke pip3 install <bibliotek>
- Forsikre deg om at DATABASES = local under backend/settings.py
- Kjør py manage.py makemigrations og py manage.py migrate for å legge til tabellene i databasen
- Kjør py manage.py runscript db_populator for å legge til filmene i databasen 
- Kjør py manage.py runserver for å starte server

Biblioteker brukt:
- django
- Pygments
- django_rest_framework
- django_extensions
- django_cors_headers
- django_filters
 
### Gitpod
- Start backenden som beskrevet ovenfor
- Åpne en ny terminal i gitpod og naviger til frontend mappen
- Kjør npm install
- Naviger til og åpne filen src/api/axiosREST.js
- Kjør gp url 8000 og terminalen burde returnerer url som ligner:
    - 'https://8000-d38c50de-0f25-4f5c-b878-7564a05e63b3.ws-eu01.gitpod.io'
- Bytt url-en i dev med den fra terminalen.
- Kjør npm start
- Pass på at begge portene er public og open i "open ports" fanen 


