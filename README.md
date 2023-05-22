![Logo](https://media.discordapp.net/attachments/1049783805046698074/1109948390835486870/waluty.png?width=1440&height=443)


# Waluty.pl

Główną funkcją projektu jest możliwość monitorowania wybranych walut. Użytkownik może wybrać interesujące go waluty, których aktualny stan chce śledzić. Może to obejmować popularne waluty, takie jak dolar amerykański (USD), euro (EUR), funt brytyjski (GBP), jen japoński (JPY) i wiele innych.

Aplikacja umożliwia również określenie zakresu czasowego, dla którego użytkownik chce zobaczyć stan walut. Na przykład, może wybrać ostatnie 7 dni lub 30 dni. Aplikacja pobierze i wyświetli odpowiednie dane historyczne dla wybranego okresu.

Dane o stanie walut są prezentowane w czytelnej formie, aby użytkownik mógł łatwo odczytać informacje. Aplikacja może przedstawiać te dane w postaci prostego wykresu.


## Spis treści

 - [wstęp](#waluty.pl)
 - [technologie](#technologie)
 - [instalacja](#instalacja)
 - [autorzy](#autorzy)
 - [licencja](#licencja)

## Technologie

W projekcie postawiliśmy na node.js z wykorzystaniem biblioteki express oraz jednej biblioteki pomocniczej mającej dostarczyć lepszych wrażeń naszym użytkownikom. Chodzi tutaj o chart.js, który odpowiedzialny jest za tworzenie przejrzystych i czytelnych wykresów. Jeśli chodzi o wyświetlanie całokształu na stronie, postawiliśmy na ejs, który swoją składnią bardzo przypomina zwykłego HTMLa i JSa co pozwala naszemu zespołowi na szybkie pisanie kodu bez konieczności przesiadywania nad dokumentacją.

## Instalacja

Aby uruchomić plik, pobierz najnowszą wersję node.js, oraz wpisz następującą komendy:
bash
npm i express chartjs ejs dotenv node-fetch
node .
    
## Autorzy

- [@graficzek](https://www.github.com/graficzekk)
- [@patrick3939](https://www.github.com/patrick3969)

## Licencja
Projekt jest tylko do odczytu, przed użyciem jakiegokolwiek fragmentu kodu należy skonsultować się z jego autorami. W przeciwnym wypadku może to skutkować pozwem.