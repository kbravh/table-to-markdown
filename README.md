<!-- PROJECT SHIELDS -->
<!-- [![Contributors][contributors-shield]][contributors-url] -->
<!-- [![Forks][forks-shield]][forks-url] -->
<!-- [![Stargazers][stars-shield]][stars-url] -->
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<h3 align="center">Table to Markdown</h3>
<p align="center">
    A Chrome DevTools extension to convert an HTML Table to Markdown for easy export.
    <br />
    <br />
    <a href="https://github.com/kbravh/table-to-markdown/issues">Report a Bug</a>
    ·
    <a href="https://github.com/kbravh/table-to-markdown/issues">Request a Feature</a>
  </p>

<!-- ABOUT THE PROJECT -->
## About The Project

This Chrome DevTools extension adds an extra tab to the Chrome DevTools and will allow you to export any HTML Table in Markdown format.

<!-- Add gif here -->

## Installing

To load this extension locally, clone the repo to your machine. Visit the Chrome extensions page at [chrome://extensions](chrome://extensions) and click the `Load Unpacked` button. Navigate to and choose this project folder that you cloned. And voilà! The extension will now appear in your browser and DevTools.

<!-- USAGE EXAMPLES -->
## Usage

Navigate to a page that has an HTML table element. Right click on the table you would like to export and inspect it in your DevTools. **Make sure that the `<table>` element itself is selected!**

Open the Table to Markdown panel of the DevTools (you may need to click the dropdown to see it). Click the `Convert to Markdown` button, and your markdown table will appear in the box.

### HTML Table export format

To see an example of how a table will be rendered, let's look at the following table taken from the [Scholastic Accolades Wikipedia page](https://en.wikipedia.org/wiki/Scholastic_accolades#Doctors_in_law).

<br />
<table class="wikitable sortable jquery-tablesorter">
  <thead>
    <tr>
      <th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Accolade</th>
      <th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Name</th>
      <th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Death
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><i>Doctor Aristotelis Anima</i></td>
      <td><a href="/w/index.php?title=Johannes_Dondus&amp;action=edit&amp;redlink=1" class="new"
          title="Johannes Dondus (page does not exist)">Johannes Dondus</a></td>
      <td>1380
      </td>
    </tr>
    <tr>
      <td><i>Doctor a Doctoribus</i></td>
      <td><a href="/w/index.php?title=Antonius_Franciscus&amp;action=edit&amp;redlink=1" class="new"
          title="Antonius Franciscus (page does not exist)">Antonius Franciscus</a></td>
      <td>1528
      </td>
    </tr>
    <tr>
      <td><i>Doctor Fons Canonum</i></td>
      <td><a href="/w/index.php?title=Johannes_Andrea&amp;action=edit&amp;redlink=1" class="new"
          title="Johannes Andrea (page does not exist)">Johannes Andrea</a></td>
      <td>1348
      </td>
    </tr>
    <tr>
      <td><i>Doctor Fons Juris Utriusque</i></td>
      <td><a href="/wiki/Henry_of_Susa" class="mw-redirect" title="Henry of Susa">Henry of Susa</a> (Ostia)</td>
      <td>1267-81
      </td>
    </tr>
    <tr>
      <td><i>Doctor Lucerna Juris</i></td>
      <td><a href="/wiki/Baldus_de_Ubaldis" title="Baldus de Ubaldis">Baldus de Ubaldis</a></td>
      <td>1400
      </td>
    </tr>
    <tr>
      <td><i>Doctor Lucerna Juris Pontificii</i></td>
      <td><a href="/wiki/Nicholas_Tedeschi" class="mw-redirect" title="Nicholas Tedeschi">Nicholas Tedeschi</a> (O.S.B.)
      </td>
      <td>1445
      </td>
    </tr>
    <tr>
      <td><i>Doctor Lumen Juris</i></td>
      <td><a href="/wiki/Pope_Clement_IV" title="Pope Clement IV">Pope Clement IV</a></td>
      <td>1268
      </td>
    </tr>
    <tr>
      <td><i>Doctor Lumen Legum</i></td>
      <td><a href="/wiki/Irnerius" title="Irnerius">Irnerius</a></td>
      <td>1125 (after)
      </td>
    </tr>
    <tr>
      <td><i>Doctor Memoriosissimus</i></td>
      <td><a href="/w/index.php?title=Ludovicus_Pontanus&amp;action=edit&amp;redlink=1" class="new"
          title="Ludovicus Pontanus (page does not exist)">Ludovicus Pontanus</a></td>
      <td>1439
      </td>
    </tr>
    <tr>
      <td><i>Doctor Monarcha Juris</i></td>
      <td><a href="/w/index.php?title=Bartholomew_of_Saliceto&amp;action=edit&amp;redlink=1" class="new"
          title="Bartholomew of Saliceto (page does not exist)">Bartholomew of Saliceto</a></td>
      <td>1412
      </td>
    </tr>
    <tr>
      <td><i>Doctor Os Aureum</i></td>
      <td><a href="/wiki/Bulgarus" title="Bulgarus">Bulgarus</a></td>
      <td>1166
      </td>
    </tr>
    <tr>
      <td><i>Doctor Pater Decretalium</i></td>
      <td><a href="/wiki/Gregory_IX" class="mw-redirect" title="Gregory IX">Gregory IX</a></td>
      <td>1241
      </td>
    </tr>
    <tr>
      <td><i>Doctor Pater et Organum Veritatis</i></td>
      <td><a href="/wiki/Pope_Innocent_IV" title="Pope Innocent IV">Pope Innocent IV</a></td>
      <td>1254
      </td>
    </tr>
    <tr>
      <td><i>Doctor Pater Juris</i></td>
      <td><a href="/wiki/Pope_Innocent_III" title="Pope Innocent III">Pope Innocent III</a></td>
      <td>1216
      </td>
    </tr>
    <tr>
      <td><i>Doctor Pater Peritorum</i></td>
      <td><a href="/w/index.php?title=Pierre_de_Belleperche&amp;action=edit&amp;redlink=1" class="new"
          title="Pierre de Belleperche (page does not exist)">Pierre de Belleperche</a></td>
      <td>1307
      </td>
    </tr>
    <tr>
      <td><i>Doctor Planus ac Perspicuus</i></td>
      <td><a href="/wiki/Walter_Burley" title="Walter Burley">Walter Burleigh</a></td>
      <td>1337
      </td>
    </tr>
    <tr>
      <td><i>Doctor Princeps Subtilitatum</i></td>
      <td><a href="/w/index.php?title=Francesco_d%27Accolti&amp;action=edit&amp;redlink=1" class="new"
          title="Francesco d'Accolti (page does not exist)">Francesco d'Accolti</a></td>
      <td>1486
      </td>
    </tr>
    <tr>
      <td><i>Doctor Speculator</i></td>
      <td><a href="/wiki/William_Durandus" class="mw-redirect" title="William Durandus">William Durandus</a></td>
      <td>1296
      </td>
    </tr>
    <tr>
      <td><i>Doctor Speculum Juris</i></td>
      <td><a href="/wiki/Bartholus_of_Sassoferrato" class="mw-redirect" title="Bartholus of Sassoferrato">Bartholus of
          Sassoferrato</a></td>
      <td>1359
      </td>
    </tr>
    <tr>
      <td><i>Doctor Subtilis</i></td>
      <td><a href="/w/index.php?title=Benedict_Raymond&amp;action=edit&amp;redlink=1" class="new"
          title="Benedict Raymond (page does not exist)">Benedict Raymond</a></td>
      <td>1440
      </td>
    </tr>
    <tr>
      <td><i>Doctor Subtilis</i></td>
      <td>Filippo Corneo</td>
      <td>1462
      </td>
    </tr>
    <tr>
      <td><i>Doctor Verus</i></td>
      <td><a href="/w/index.php?title=Thomas_Doctius&amp;action=edit&amp;redlink=1" class="new"
          title="Thomas Doctius (page does not exist)">Thomas Doctius</a>, Siena</td>
      <td>1441
      </td>
    </tr>
  </tbody>
  <tfoot></tfoot>
</table>
<br />

This table will be rendered in Markdown as follows:

```
|             Accolade              |            Name            |    Death     |
|-----------------------------------|----------------------------|--------------|
|     Doctor Aristotelis Anima      |      Johannes Dondus       |     1380     |
|        Doctor a Doctoribus        |    Antonius Franciscus     |     1528     |
|        Doctor Fons Canonum        |      Johannes Andrea       |     1348     |
|    Doctor Fons Juris Utriusque    |   Henry of Susa (Ostia)    |   1267-81    |
|       Doctor Lucerna Juris        |     Baldus de Ubaldis      |     1400     |
|  Doctor Lucerna Juris Pontificii  | Nicholas Tedeschi (O.S.B.) |     1445     |
|        Doctor Lumen Juris         |      Pope Clement IV       |     1268     |
|        Doctor Lumen Legum         |          Irnerius          | 1125 (after) |
|      Doctor Memoriosissimus       |     Ludovicus Pontanus     |     1439     |
|       Doctor Monarcha Juris       |  Bartholomew of Saliceto   |     1412     |
|         Doctor Os Aureum          |          Bulgarus          |     1166     |
|     Doctor Pater Decretalium      |         Gregory IX         |     1241     |
| Doctor Pater et Organum Veritatis |      Pope Innocent IV      |     1254     |
|        Doctor Pater Juris         |     Pope Innocent III      |     1216     |
|      Doctor Pater Peritorum       |   Pierre de Belleperche    |     1307     |
|    Doctor Planus ac Perspicuus    |      Walter Burleigh       |     1337     |
|   Doctor Princeps Subtilitatum    |    Francesco d'Accolti     |     1486     |
|         Doctor Speculator         |      William Durandus      |     1296     |
|       Doctor Speculum Juris       | Bartholus of Sassoferrato  |     1359     |
|          Doctor Subtilis          |      Benedict Raymond      |     1440     |
|          Doctor Subtilis          |       Filippo Corneo       |     1462     |
|           Doctor Verus            |   Thomas Doctius, Siena    |     1441     |
```

### HTML Tables without headers
Most Markdown table parsers do not support header-less tables. To compensate for this, this extension throws in a blank header row. For example, take the following table (taken from the [NBA Most Valuable Player Award Wikipedia page](https://en.wikipedia.org/wiki/NBA_Most_Valuable_Player_Award)).

<br/>
<table class="wikitable">
  <tbody>
    <tr>
      <td style="background-color:#CFECEC; border:1px solid #aaaaaa; width:6em; color: #535056;">^</td>
      <td>Denotes player who is still active in the NBA</td>
    </tr>
    <tr>
      <td style="background-color:#FFFF99; border:1px solid #aaaaaa; width:6em; color: #535056;">*</td>
      <td>Inducted into the <a href="/wiki/Naismith_Memorial_Basketball_Hall_of_Fame" title="Naismith Memorial Basketball Hall of Fame">Naismith Memorial Basketball Hall of Fame</a></td>
    </tr>
    <tr>
      <td style="background-color:#FFE6BD; border:1px solid #aaaaaa; width:6em; color: #535056;">†</td>
      <td>Denotes player whose team won championship that year</td>
    </tr>
    <tr>
      <td>Player (X)</td>
      <td>Denotes the number of times the player had been named MVP at that time</td>
    </tr>
    <tr>
      <td>Team (X)</td>
      <td>Denotes the number of times a player from this team had won at that time</td>
    </tr>
  </tbody>
</table>
<br/>

This table will be rendered in Markdown like this:

```
|            |                                                                          |
|------------|--------------------------------------------------------------------------|
|     ^      |              Denotes player who is still active in the NBA               |
|     *      |       Inducted into the Naismith Memorial Basketball Hall of Fame        |
|     †      |           Denotes player whose team won championship that year           |
| Player (X) |  Denotes the number of times the player had been named MVP at that time  |
|  Team (X)  | Denotes the number of times a player from this team had won at that time |
```

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [`LICENSE`](LICENSE) file for details

<!-- CONTACT -->
## Contact

Karey Higuera - [@kbravh](https://twitter.com/kbravh) - karey.higuera@gmail.com

Project Link: [https://github.com/kbravh/table-to-markdown](https://github.com/kbravh/table-to-markdown)


<!-- MARKDOWN LINKS -->
[issues-shield]: https://img.shields.io/github/issues/kbravh/table-to-markdown.svg?style=flat-square
[issues-url]: https://github.com/kbravh/table-to-markdown/issues
[license-shield]: https://img.shields.io/github/license/kbravh/table-to-markdown.svg?style=flat-square
[license-url]: https://github.com/kbravh/table-to-markdown/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/kbravh