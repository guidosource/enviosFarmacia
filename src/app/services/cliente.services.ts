import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { GlobalServices } from '../services/global.services';

@Injectable()
export class ClienteServices {
    
    constructor(private _http: HttpClient, private _global: GlobalServices ) { }

    nuevoCliente() {

        
    }


    todosLosClientes() {
        
        // TEST
        return [{ "nombre": "luigi", "apellido": "Trippitt", "email": "ltrippitt0@chronoengine.com", "documento": "01-126-4180", "telefono": "293-787-1077", "direccion": "8203 Bartillon Trail" },
        { "nombre": "benita", "apellido": "Brindle", "email": "bbrindle1@reverbnation.com", "documento": "18-078-4251", "telefono": "793-278-7055", "direccion": "724 New Castle Crossing" },
        { "nombre": "Carmine", "apellido": "Bogaert", "email": "cbogaert2@cnn.com", "documento": "28-386-8147", "telefono": "271-684-9819", "direccion": "546 7th Alley" },
        { "nombre": "Aimil", "apellido": "Liversidge", "email": "aliversidge3@guardian.co.uk", "documento": "64-673-5370", "telefono": "495-475-1888", "direccion": "16 Beilfuss Park" },
        { "nombre": "Cami", "apellido": "Domoney", "email": "cdomoney4@eepurl.com", "documento": "11-118-7321", "telefono": "732-288-5153", "direccion": "2756 Carberry Center" },
        { "nombre": "Tuckie", "apellido": "MacNockater", "email": "tmacnockater5@g.co", "documento": "77-434-1258", "telefono": "858-233-6761", "direccion": "07 Victoria Road" },
        { "nombre": "Cicily", "apellido": "Aisthorpe", "email": "caisthorpe6@blogspot.com", "documento": "36-122-3703", "telefono": "952-244-5663", "direccion": "261 Shelley Circle" },
        { "nombre": "Nara", "apellido": "Newlands", "email": "nnewlands7@php.net", "documento": "26-786-0379", "telefono": "605-707-2302", "direccion": "286 Sachtjen Way" },
        { "nombre": "Gloriane", "apellido": "Redhills", "email": "gredhills8@army.mil", "documento": "30-968-9178", "telefono": "887-866-4907", "direccion": "487 Ramsey Drive" },
        { "nombre": "Uriah", "apellido": "Gallaher", "email": "ugallaher9@yolasite.com", "documento": "59-979-9376", "telefono": "248-875-9290", "direccion": "15 Dakota Alley" },
        { "nombre": "Quincy", "apellido": "Perton", "email": "qpertona@sbwire.com", "documento": "96-168-2927", "telefono": "310-166-9408", "direccion": "98128 Lerdahl Park" },
        { "nombre": "Mata", "apellido": "Tixall", "email": "mtixallb@blogger.com", "documento": "02-335-8910", "telefono": "105-343-8708", "direccion": "9 Sheridan Junction" },
        { "nombre": "Archaimbaud", "apellido": "Pitone", "email": "apitonec@csmonitor.com", "documento": "88-233-4221", "telefono": "733-591-3543", "direccion": "113 Morning Terrace" },
        { "nombre": "Legra", "apellido": "Cronk", "email": "lcronkd@e-recht24.de", "documento": "91-792-5398", "telefono": "417-446-8560", "direccion": "551 Linden Place" },
        { "nombre": "Hillie", "apellido": "Berkowitz", "email": "hberkowitze@craigslist.org", "documento": "50-338-1303", "telefono": "701-822-9496", "direccion": "109 Kingsford Center" },
        { "nombre": "Mei", "apellido": "Dunseath", "email": "mdunseathf@naver.com", "documento": "33-510-3441", "telefono": "110-189-6898", "direccion": "1 Prairieview Place" },
        { "nombre": "Megan", "apellido": "Dimitresco", "email": "mdimitrescog@ezinearticles.com", "documento": "29-618-7412", "telefono": "673-685-1501", "direccion": "17 Longview Junction" },
        { "nombre": "Jacquelin", "apellido": "Mompesson", "email": "jmompessonh@360.cn", "documento": "28-436-9870", "telefono": "556-974-0960", "direccion": "2 Holy Cross Alley" },
        { "nombre": "Kittie", "apellido": "Lilleman", "email": "klillemani@yellowpages.com", "documento": "92-079-0388", "telefono": "737-846-3467", "direccion": "1775 Bashford Pass" },
        { "nombre": "Juliet", "apellido": "Normanville", "email": "jnormanvillej@macromedia.com", "documento": "42-445-0732", "telefono": "127-126-5046", "direccion": "41 Gerald Court" },
        { "nombre": "Elias", "apellido": "Swetenham", "email": "eswetenhamk@ft.com", "documento": "00-287-8946", "telefono": "713-144-6720", "direccion": "86159 Grover Street" },
        { "nombre": "Aindrea", "apellido": "Duggen", "email": "aduggenl@biglobe.ne.jp", "documento": "29-894-4713", "telefono": "549-610-8780", "direccion": "51 Elmside Park" },
        { "nombre": "Wendall", "apellido": "Thake", "email": "wthakem@squarespace.com", "documento": "26-971-7837", "telefono": "579-741-0373", "direccion": "92427 Havey Plaza" },
        { "nombre": "Maisie", "apellido": "Orrum", "email": "morrumn@msn.com", "documento": "79-851-8773", "telefono": "295-591-7197", "direccion": "97883 Corry Street" },
        { "nombre": "Phelia", "apellido": "Capitano", "email": "pcapitanoo@irs.gov", "documento": "61-003-4561", "telefono": "959-281-4975", "direccion": "709 Parkside Pass" },
        { "nombre": "Gabbie", "apellido": "Antoniou", "email": "gantonioup@google.nl", "documento": "63-136-4258", "telefono": "576-974-2547", "direccion": "85298 Melrose Street" },
        { "nombre": "Lusa", "apellido": "Garside", "email": "lgarsideq@myspace.com", "documento": "14-898-0542", "telefono": "233-895-8642", "direccion": "16961 Wayridge Parkway" },
        { "nombre": "Genevra", "apellido": "Backshell", "email": "gbackshellr@toplist.cz", "documento": "37-261-3995", "telefono": "147-550-5939", "direccion": "52 Carberry Junction" },
        { "nombre": "Reena", "apellido": "Thunder", "email": "rthunders@angelfire.com", "documento": "10-665-4759", "telefono": "638-296-1874", "direccion": "495 Merchant Center" },
        { "nombre": "Benoite", "apellido": "Baldi", "email": "bbaldit@zimbio.com", "documento": "83-612-3121", "telefono": "901-309-7842", "direccion": "0003 Acker Court" },
        { "nombre": "Agnesse", "apellido": "Rattray", "email": "arattrayu@abc.net.au", "documento": "46-080-8057", "telefono": "904-635-1494", "direccion": "1 Warbler Circle" },
        { "nombre": "Olympie", "apellido": "Scoles", "email": "oscolesv@census.gov", "documento": "05-813-9079", "telefono": "915-927-7840", "direccion": "90626 Larry Drive" },
        { "nombre": "Gerladina", "apellido": "Mathew", "email": "gmatheww@mtv.com", "documento": "71-169-4481", "telefono": "583-233-2348", "direccion": "01511 Lillian Park" },
        { "nombre": "Chryste", "apellido": "Trunchion", "email": "ctrunchionx@auda.org.au", "documento": "77-248-5404", "telefono": "313-310-0416", "direccion": "04 Jenna Parkway" },
        { "nombre": "Umberto", "apellido": "Wetherby", "email": "uwetherbyy@newsvine.com", "documento": "77-772-1010", "telefono": "831-518-2299", "direccion": "9 Hoffman Parkway" },
        { "nombre": "Shell", "apellido": "Joffe", "email": "sjoffez@dyndns.org", "documento": "20-135-0997", "telefono": "406-606-0218", "direccion": "509 Bobwhite Avenue" },
        { "nombre": "Tremayne", "apellido": "Duro", "email": "tduro10@arizona.edu", "documento": "18-564-8259", "telefono": "781-107-6260", "direccion": "434 Monument Center" },
        { "nombre": "Symon", "apellido": "Kenefick", "email": "skenefick11@t-online.de", "documento": "36-480-7315", "telefono": "450-203-2203", "direccion": "2820 Westerfield Plaza" },
        { "nombre": "Stacia", "apellido": "Keppel", "email": "skeppel12@chronoengine.com", "documento": "04-913-4680", "telefono": "799-840-7804", "direccion": "332 Logan Hill" },
        { "nombre": "Catie", "apellido": "Bradnum", "email": "cbradnum13@apache.org", "documento": "77-897-6283", "telefono": "480-164-9751", "direccion": "94 Kropf Court" },
        { "nombre": "Newton", "apellido": "Chalfant", "email": "nchalfant14@ask.com", "documento": "29-444-3077", "telefono": "640-996-3722", "direccion": "18 Butternut Drive" },
        { "nombre": "Janenna", "apellido": "Edel", "email": "jedel15@webs.com", "documento": "32-329-5482", "telefono": "942-451-9082", "direccion": "66 Spenser Avenue" },
        { "nombre": "Hendrik", "apellido": "Gercke", "email": "hgercke16@msu.edu", "documento": "73-639-0103", "telefono": "347-299-0255", "direccion": "45034 Dawn Lane" },
        { "nombre": "Fanni", "apellido": "Fashion", "email": "ffashion17@github.io", "documento": "33-853-7757", "telefono": "722-852-9118", "direccion": "39 Mesta Alley" },
        { "nombre": "Travis", "apellido": "Zohrer", "email": "tzohrer18@meetup.com", "documento": "91-223-0010", "telefono": "288-189-9684", "direccion": "8 Brickson Park Point" },
        { "nombre": "Arie", "apellido": "Norrington", "email": "anorrington19@w3.org", "documento": "99-671-6993", "telefono": "338-741-3238", "direccion": "2562 Sunbrook Pass" },
        { "nombre": "Essie", "apellido": "Peat", "email": "epeat1a@furl.net", "documento": "93-796-4117", "telefono": "423-467-6980", "direccion": "2815 Atwood Lane" },
        { "nombre": "Lucho", "apellido": "Aymeric", "email": "laymeric1b@prlog.org", "documento": "68-280-1450", "telefono": "625-845-8393", "direccion": "15300 Center Terrace" },
        { "nombre": "Brunhilda", "apellido": "Switsur", "email": "bswitsur1c@google.com.au", "documento": "68-955-3276", "telefono": "596-904-6203", "direccion": "04904 Hoepker Avenue" },
        { "nombre": "Aurthur", "apellido": "Thunders", "email": "athunders1d@lycos.com", "documento": "69-628-6057", "telefono": "871-747-7062", "direccion": "1411 Farragut Lane" },
        { "nombre": "Francisco", "apellido": "Boulton", "email": "fboulton1e@sciencedirect.com", "documento": "67-221-3114", "telefono": "286-408-3365", "direccion": "99 Marcy Court" },
        { "nombre": "Morie", "apellido": "McAtamney", "email": "mmcatamney1f@nytimes.com", "documento": "46-771-9123", "telefono": "191-669-4527", "direccion": "5197 Stang Road" },
        { "nombre": "Jody", "apellido": "Hurndall", "email": "jhurndall1g@tripadvisor.com", "documento": "18-434-7257", "telefono": "683-311-4254", "direccion": "9873 Lake View Junction" },
        { "nombre": "Trefor", "apellido": "Key", "email": "tkey1h@artisteer.com", "documento": "52-480-2756", "telefono": "958-905-0936", "direccion": "1344 Pawling Court" },
        { "nombre": "Elise", "apellido": "Scollard", "email": "escollard1i@shop-pro.jp", "documento": "38-648-2770", "telefono": "281-366-9359", "direccion": "06619 Nancy Plaza" },
        { "nombre": "Bunnie", "apellido": "Kilbee", "email": "bkilbee1j@samsung.com", "documento": "90-703-6060", "telefono": "276-563-2323", "direccion": "236 Farmco Trail" },
        { "nombre": "Flem", "apellido": "Kellick", "email": "fkellick1k@nih.gov", "documento": "76-402-9719", "telefono": "602-691-3826", "direccion": "10622 Lien Way" },
        { "nombre": "Vilma", "apellido": "Ranald", "email": "vranald1l@gnu.org", "documento": "09-647-4029", "telefono": "916-314-6018", "direccion": "2 Morningstar Terrace" },
        { "nombre": "Gwendolen", "apellido": "Claricoats", "email": "gclaricoats1m@yelp.com", "documento": "20-967-9713", "telefono": "991-821-0478", "direccion": "644 Nevada Way" },
        { "nombre": "Maddie", "apellido": "Scaice", "email": "mscaice1n@vk.com", "documento": "06-431-3531", "telefono": "889-834-6126", "direccion": "64748 Melvin Avenue" },
        { "nombre": "Blondell", "apellido": "Dunckley", "email": "bdunckley1o@ihg.com", "documento": "88-345-9341", "telefono": "120-144-6781", "direccion": "24169 Bonner Plaza" },
        { "nombre": "Maryann", "apellido": "Grizard", "email": "mgrizard1p@apple.com", "documento": "21-678-4604", "telefono": "416-788-7005", "direccion": "4 Dakota Point" },
        { "nombre": "Colene", "apellido": "Eubank", "email": "ceubank1q@soup.io", "documento": "17-907-4567", "telefono": "561-491-4073", "direccion": "0311 Carioca Junction" },
        { "nombre": "Arlie", "apellido": "Hegden", "email": "ahegden1r@newsvine.com", "documento": "82-161-6824", "telefono": "203-721-9183", "direccion": "04 John Wall Parkway" },
        { "nombre": "Vania", "apellido": "Glawsop", "email": "vglawsop1s@sakura.ne.jp", "documento": "35-854-0611", "telefono": "873-531-3396", "direccion": "1791 Novick Point" },
        { "nombre": "Brinna", "apellido": "Baroux", "email": "bbaroux1t@dailymail.co.uk", "documento": "45-497-9607", "telefono": "751-429-1821", "direccion": "6 Lawn Alley" },
        { "nombre": "Randall", "apellido": "Von Oertzen", "email": "rvonoertzen1u@squidoo.com", "documento": "59-549-9900", "telefono": "438-537-5711", "direccion": "13647 Homewood Court" },
        { "nombre": "Collie", "apellido": "Lalonde", "email": "clalonde1v@uol.com.br", "documento": "56-168-2315", "telefono": "681-434-7289", "direccion": "062 Dahle Way" },
        { "nombre": "Belle", "apellido": "Orpwood", "email": "borpwood1w@cocolog-nifty.com", "documento": "69-185-4376", "telefono": "659-580-5470", "direccion": "6 Canary Court" },
        { "nombre": "Egon", "apellido": "Mainwaring", "email": "emainwaring1x@youku.com", "documento": "54-059-3335", "telefono": "862-228-2398", "direccion": "442 Veith Road" },
        { "nombre": "Gunner", "apellido": "Starsmore", "email": "gstarsmore1y@privacy.gov.au", "documento": "70-333-9734", "telefono": "448-506-0475", "direccion": "8869 Southridge Hill" },
        { "nombre": "Tiffi", "apellido": "Costigan", "email": "tcostigan1z@gmpg.org", "documento": "94-806-7418", "telefono": "915-274-7297", "direccion": "998 Mayer Plaza" },
        { "nombre": "Hebert", "apellido": "Searchwell", "email": "hsearchwell20@mtv.com", "documento": "11-547-4483", "telefono": "708-167-2353", "direccion": "004 Oakridge Crossing" },
        { "nombre": "Aeriel", "apellido": "Wilford", "email": "awilford21@google.co.jp", "documento": "43-978-3686", "telefono": "998-132-2681", "direccion": "785 Reinke Way" },
        { "nombre": "Viv", "apellido": "Bonafant", "email": "vbonafant22@google.fr", "documento": "80-906-9059", "telefono": "465-721-6844", "direccion": "5 Erie Court" },
        { "nombre": "Abey", "apellido": "Studman", "email": "astudman23@woothemes.com", "documento": "23-825-1285", "telefono": "700-750-0120", "direccion": "654 Ruskin Avenue" },
        { "nombre": "Vicky", "apellido": "Engelbrecht", "email": "vengelbrecht24@example.com", "documento": "65-284-6073", "telefono": "422-297-5906", "direccion": "076 Lakewood Gardens Junction" },
        { "nombre": "Germaine", "apellido": "Argontt", "email": "gargontt25@mayoclinic.com", "documento": "57-444-6704", "telefono": "347-982-2869", "direccion": "45255 Mayer Junction" },
        { "nombre": "Ogdan", "apellido": "Deakins", "email": "odeakins26@nhs.uk", "documento": "17-554-8758", "telefono": "782-396-8059", "direccion": "04302 Utah Crossing" },
        { "nombre": "Lutero", "apellido": "Davydochkin", "email": "ldavydochkin27@mac.com", "documento": "67-540-3514", "telefono": "878-638-8786", "direccion": "4 Farwell Road" },
        { "nombre": "Pooh", "apellido": "Stollhofer", "email": "pstollhofer28@house.gov", "documento": "75-952-1363", "telefono": "804-877-4880", "direccion": "072 Merry Court" },
        { "nombre": "Darwin", "apellido": "Meiklejohn", "email": "dmeiklejohn29@prweb.com", "documento": "27-920-0078", "telefono": "979-752-8391", "direccion": "2 Farmco Park" },
        { "nombre": "Thorndike", "apellido": "Buard", "email": "tbuard2a@salon.com", "documento": "43-459-9600", "telefono": "392-171-0826", "direccion": "6128 Park Meadow Hill" },
        { "nombre": "Edy", "apellido": "Gudeman", "email": "egudeman2b@github.io", "documento": "96-651-9162", "telefono": "861-841-9348", "direccion": "412 Elka Point" },
        { "nombre": "Bentlee", "apellido": "Pydcock", "email": "bpydcock2c@archive.org", "documento": "44-247-8511", "telefono": "303-417-2832", "direccion": "065 Sachtjen Trail" },
        { "nombre": "Edgardo", "apellido": "Oakwood", "email": "eoakwood2d@unc.edu", "documento": "37-883-2049", "telefono": "808-630-6889", "direccion": "87 Maple Hill" },
        { "nombre": "Andris", "apellido": "Laybourne", "email": "alaybourne2e@pen.io", "documento": "51-404-9086", "telefono": "468-633-5199", "direccion": "851 Reindahl Terrace" },
        { "nombre": "Lissi", "apellido": "Seymer", "email": "lseymer2f@geocities.jp", "documento": "96-882-4052", "telefono": "343-519-7011", "direccion": "20872 Helena Drive" },
        { "nombre": "Nelle", "apellido": "Jaimez", "email": "njaimez2g@slideshare.net", "documento": "33-472-3677", "telefono": "531-952-7192", "direccion": "53 Delladonna Lane" },
        { "nombre": "Ermanno", "apellido": "Barttrum", "email": "ebarttrum2h@tuttocitta.it", "documento": "33-065-9107", "telefono": "287-332-1946", "direccion": "96238 Montana Park" },
        { "nombre": "Thebault", "apellido": "Latham", "email": "tlatham2i@symantec.com", "documento": "72-029-1185", "telefono": "719-780-0268", "direccion": "67 Redwing Parkway" },
        { "nombre": "Arlie", "apellido": "Joslow", "email": "ajoslow2j@seesaa.net", "documento": "61-085-2669", "telefono": "813-970-7122", "direccion": "3 Thompson Point" },
        { "nombre": "Roberto", "apellido": "Vockings", "email": "rvockings2k@cdbaby.com", "documento": "66-984-7695", "telefono": "853-582-0164", "direccion": "4 International Junction" },
        { "nombre": "Pablo", "apellido": "Roo", "email": "proo2l@home.pl", "documento": "33-787-2142", "telefono": "242-565-7170", "direccion": "5821 Doe Crossing Terrace" },
        { "nombre": "Louise", "apellido": "Woodeson", "email": "lwoodeson2m@ebay.com", "documento": "38-618-2415", "telefono": "730-871-0030", "direccion": "245 Emmet Center" },
        { "nombre": "Hartwell", "apellido": "Novichenko", "email": "hnovichenko2n@sakura.ne.jp", "documento": "24-308-0671", "telefono": "652-582-5758", "direccion": "9108 Texas Parkway" },
        { "nombre": "Yanaton", "apellido": "Taffe", "email": "ytaffe2o@amazon.co.uk", "documento": "07-331-3319", "telefono": "808-917-8558", "direccion": "54826 Killdeer Plaza" },
        { "nombre": "Donaugh", "apellido": "Toms", "email": "dtoms2p@i2i.jp", "documento": "52-004-6068", "telefono": "972-905-2587", "direccion": "34 Meadow Valley Lane" },
        { "nombre": "Mohandis", "apellido": "Jumonet", "email": "mjumonet2q@telegraph.co.uk", "documento": "30-255-8785", "telefono": "501-682-5233", "direccion": "03 Lunder Place" },
        { "nombre": "Nert", "apellido": "Coling", "email": "ncoling2r@godaddy.com", "documento": "33-339-6414", "telefono": "630-776-9088", "direccion": "65673 4th Alley" },
        { "nombre": "Rozella", "apellido": "Yanshinov", "email": "ryanshinov2s@ucoz.com", "documento": "82-890-5573", "telefono": "919-246-4412", "direccion": "501 Arapahoe Hill" },
        { "nombre": "Devlin", "apellido": "Linthead", "email": "dlinthead2t@biglobe.ne.jp", "documento": "46-459-7127", "telefono": "830-611-2013", "direccion": "14 Declaration Drive" },
        { "nombre": "Margalo", "apellido": "Duligal", "email": "mduligal2u@digg.com", "documento": "55-635-5631", "telefono": "539-365-4731", "direccion": "07403 Tony Parkway" },
        { "nombre": "Torry", "apellido": "Cowlas", "email": "tcowlas2v@nydailynews.com", "documento": "86-990-0573", "telefono": "352-576-9565", "direccion": "3 Anderson Crossing" },
        { "nombre": "Daphne", "apellido": "Baudet", "email": "dbaudet2w@hud.gov", "documento": "33-128-7756", "telefono": "499-443-5078", "direccion": "38 Lotheville Center" },
        { "nombre": "Angel", "apellido": "Aiskrigg", "email": "aaiskrigg2x@xrea.com", "documento": "27-745-4176", "telefono": "171-934-9890", "direccion": "5 Old Gate Plaza" },
        { "nombre": "Doralin", "apellido": "Mackstead", "email": "dmackstead2y@deliciousdays.com", "documento": "86-782-5954", "telefono": "870-875-7801", "direccion": "83 Barnett Plaza" },
        { "nombre": "Darla", "apellido": "Sweetnam", "email": "dsweetnam2z@google.co.uk", "documento": "67-240-0634", "telefono": "762-374-3420", "direccion": "77342 Grayhawk Lane" },
        { "nombre": "Idell", "apellido": "Chalker", "email": "ichalker30@moonfruit.com", "documento": "73-772-0369", "telefono": "120-781-0939", "direccion": "57 Ilene Road" },
        { "nombre": "Jeremiah", "apellido": "Geggie", "email": "jgeggie31@yelp.com", "documento": "42-072-0761", "telefono": "211-816-9657", "direccion": "92988 Summerview Street" },
        { "nombre": "Electra", "apellido": "Toland", "email": "etoland32@tuttocitta.it", "documento": "15-510-9811", "telefono": "487-981-3201", "direccion": "2367 Del Sol Street" },
        { "nombre": "Britte", "apellido": "Ryam", "email": "bryam33@ehow.com", "documento": "24-339-6418", "telefono": "287-119-7068", "direccion": "58705 Del Sol Pass" },
        { "nombre": "Claude", "apellido": "Butterworth", "email": "cbutterworth34@illinois.edu", "documento": "85-170-2672", "telefono": "556-596-1043", "direccion": "2183 Logan Drive" },
        { "nombre": "Ashleigh", "apellido": "MacFie", "email": "amacfie35@rediff.com", "documento": "97-202-9007", "telefono": "113-613-6740", "direccion": "97 Kensington Point" },
        { "nombre": "Francesco", "apellido": "Rotter", "email": "frotter36@youtu.be", "documento": "94-197-9878", "telefono": "343-225-7696", "direccion": "285 Main Center" },
        { "nombre": "Emlyn", "apellido": "Ansett", "email": "eansett37@trellian.com", "documento": "06-618-2362", "telefono": "641-899-2493", "direccion": "78 Haas Way" },
        { "nombre": "Eugine", "apellido": "Brunini", "email": "ebrunini38@gnu.org", "documento": "93-608-1088", "telefono": "242-899-9109", "direccion": "97922 Banding Way" },
        { "nombre": "Frankie", "apellido": "Webben", "email": "fwebben39@vimeo.com", "documento": "10-646-5391", "telefono": "175-610-2628", "direccion": "5 Mockingbird Hill" },
        { "nombre": "Hermie", "apellido": "Jager", "email": "hjager3a@reddit.com", "documento": "84-002-1417", "telefono": "544-936-3397", "direccion": "2342 Crest Line Parkway" },
        { "nombre": "Tull", "apellido": "Boffin", "email": "tboffin3b@wired.com", "documento": "14-112-4936", "telefono": "585-576-8294", "direccion": "5230 Mosinee Terrace" },
        { "nombre": "Stephana", "apellido": "Joburn", "email": "sjoburn3c@telegraph.co.uk", "documento": "43-387-3068", "telefono": "586-334-3704", "direccion": "0 Doe Crossing Lane" },
        { "nombre": "Cooper", "apellido": "Standbrooke", "email": "cstandbrooke3d@digg.com", "documento": "84-527-2801", "telefono": "823-460-4663", "direccion": "284 Scoville Way" },
        { "nombre": "Chryste", "apellido": "Dixon", "email": "cdixon3e@accuweather.com", "documento": "87-822-9839", "telefono": "930-161-3802", "direccion": "746 Graceland Trail" },
        { "nombre": "Malina", "apellido": "Daltry", "email": "mdaltry3f@oaic.gov.au", "documento": "00-385-7333", "telefono": "517-332-3154", "direccion": "6096 Chive Crossing" },
        { "nombre": "Chiarra", "apellido": "Spensley", "email": "cspensley3g@reference.com", "documento": "09-118-8773", "telefono": "787-876-7071", "direccion": "1741 Weeping Birch Trail" },
        { "nombre": "Loella", "apellido": "Glowacz", "email": "lglowacz3h@indiatimes.com", "documento": "88-171-7983", "telefono": "500-135-3015", "direccion": "1535 North Pass" },
        { "nombre": "Linnell", "apellido": "Scamel", "email": "lscamel3i@naver.com", "documento": "57-460-4898", "telefono": "384-339-5728", "direccion": "8554 Erie Parkway" },
        { "nombre": "Klemens", "apellido": "Reveley", "email": "kreveley3j@army.mil", "documento": "50-013-6858", "telefono": "923-356-4193", "direccion": "3 Ilene Crossing" },
        { "nombre": "Marris", "apellido": "Straughan", "email": "mstraughan3k@oakley.com", "documento": "98-966-6156", "telefono": "334-936-8655", "direccion": "6031 Mariners Cove Center" },
        { "nombre": "Sanderson", "apellido": "McVee", "email": "smcvee3l@symantec.com", "documento": "20-339-6635", "telefono": "737-967-6507", "direccion": "37 Kropf Street" },
        { "nombre": "Brian", "apellido": "Tinan", "email": "btinan3m@livejournal.com", "documento": "36-563-9312", "telefono": "486-153-1400", "direccion": "4472 Badeau Way" },
        { "nombre": "Dagny", "apellido": "Ivanchikov", "email": "divanchikov3n@addthis.com", "documento": "44-453-2079", "telefono": "203-128-9114", "direccion": "2614 Ridgeview Junction" },
        { "nombre": "Rina", "apellido": "Escudier", "email": "rescudier3o@simplemachines.org", "documento": "11-652-1051", "telefono": "304-806-0945", "direccion": "3 Old Gate Pass" },
        { "nombre": "Moses", "apellido": "Mowsdill", "email": "mmowsdill3p@ted.com", "documento": "59-391-8239", "telefono": "628-336-9108", "direccion": "865 Washington Park" },
        { "nombre": "Tracey", "apellido": "Matussow", "email": "tmatussow3q@thetimes.co.uk", "documento": "19-895-5487", "telefono": "123-657-3639", "direccion": "7 Trailsway Plaza" },
        { "nombre": "Kelci", "apellido": "McAleese", "email": "kmcaleese3r@goodreads.com", "documento": "43-375-6744", "telefono": "996-395-2788", "direccion": "44 Kensington Terrace" },
        { "nombre": "Sherwin", "apellido": "Klinck", "email": "sklinck3s@php.net", "documento": "33-390-7514", "telefono": "659-460-3924", "direccion": "894 Chinook Street" },
        { "nombre": "Margalit", "apellido": "Trundle", "email": "mtrundle3t@dot.gov", "documento": "69-862-8191", "telefono": "279-301-8479", "direccion": "2835 Dwight Plaza" },
        { "nombre": "Teddie", "apellido": "Alejo", "email": "talejo3u@army.mil", "documento": "44-689-4985", "telefono": "915-918-5649", "direccion": "7 Lerdahl Point" }];
        
        
        /* const options = {
            headers : new HttpHeaders({
                'Content-Type' : 'application/json'
                // 'token' : localStorage.getItem('token')
                
            })
        };
        
        return  this._http.get( this._global.URL_SERVER + '/cliente/obtenerclientes', options )
        .pipe(map(res => res['clientes']) ); */
    }

    buscarClientes(termino: string) {
        return this._http.get( this._global.URL_SERVER + `/cliente/buscar/${termino}` )
            .pipe(map(res => res['clientes']));
    }
}