
class  Path {

    constructor() {
     
        const paths = [ 
            {name : "Andorra",
            path : require("../src/worldFlags/ad.png")},
            {name : "United Arab Emirates",
            path : require("../src/worldFlags/ae.png")},
            {name : "Afghanistan",
            path : require("../src/worldFlags/af.png")},
            {name : "Antigua and Barbuda",
            path : require("../src/worldFlags/ag.png")},
            {name : "Anguilla",
            path : require("../src/worldFlags/ai.png")},
            {name : "Albania",
            path : require("../src/worldFlags/al.png")},
            {name : "Armenia",
            path : require("../src/worldFlags/am.png")},
            {name : "Angola",
            path : require("../src/worldFlags/ao.png")},
            {name : "Antarctica",
            path : require("../src/worldFlags/aq.png")},
            {name : "Argentina",
            path : require("../src/worldFlags/ar.png")},
            {name : "American Samoa",
            path : require("../src/worldFlags/as.png")},
            {name : "Austria",
            path : require("../src/worldFlags/at.png")},
            {name : "Australia",
            path : require("../src/worldFlags/au.png")},
            {name : "Aruba",
            path : require("../src/worldFlags/aw.png")},
            {name : "Åland Islands",
            path : require("../src/worldFlags/ax.png")},
            {name : "Azerbaijan",
            path : require("../src/worldFlags/az.png")},
            {name : "Bosnia and Herzegovina",
            path : require("../src/worldFlags/ba.png")},
            {name : "Barbados",
            path : require("../src/worldFlags/bb.png")},
            {name : "Bangladesh",
            path : require("../src/worldFlags/bd.png")},
            {name : "Belgium",
            path : require("../src/worldFlags/be.png")},
            {name : "Burkina Faso",
            path : require("../src/worldFlags/bf.png")},
            {name : "Bulgaria",
            path : require("../src/worldFlags/bg.png")},
            {name : "Bahrain",
            path : require("../src/worldFlags/bh.png")},
            {name : "Burundi",
            path : require("../src/worldFlags/bi.png")},
            {name : "Benin",
            path : require("../src/worldFlags/bj.png")},
            {name : "Saint Barthélemy",
            path : require("../src/worldFlags/bl.png")},
            {name : "Bermuda",
            path : require("../src/worldFlags/bm.png")},
            {name : "Brunei Darussalam",
            path : require("../src/worldFlags/bn.png")},
            {name : "Bolivia",
            path : require("../src/worldFlags/bo.png")},
            {name : "Bonaire, Sint Eustatius, and Saba",
            path : require("../src/worldFlags/bq.png")},
            {name : "Brazil",
            path : require("../src/worldFlags/br.png")},
            {name : "Bahamas",
            path : require("../src/worldFlags/bs.png")},
            {name : "Bhutan",
            path : require("../src/worldFlags/bt.png")},
            {name : "Bouvet Island",
            path : require("../src/worldFlags/bv.png")},
            {name : "Botswana",
            path : require("../src/worldFlags/bw.png")},
            {name : "Belarus",
            path : require("../src/worldFlags/by.png")},
            {name : "Belize",
            path : require("../src/worldFlags/bz.png")},
            {name : "Canada",
            path : require("../src/worldFlags/ca.png")},
            {name : "Cocos (Keeling) Islands",
            path : require("../src/worldFlags/cc.png")},
            {name : "Democratic Republic of the Congo",
            path : require("../src/worldFlags/cd.png")},
            {name : "Central African Republic",
            path : require("../src/worldFlags/cf.png")},
            {name : "Republic of the Congo",
            path : require("../src/worldFlags/cg.png")},
            {name : "Switzerland",
            path : require("../src/worldFlags/ch.png")},
            {name : "Côte d'Ivoire",
            path : require("../src/worldFlags/ci.png")},
            {name : "Cook Islands",
            path : require("../src/worldFlags/ck.png")},
            {name : "Chile",
            path : require("../src/worldFlags/cl.png")},
            {name : "Cameroon",
            path : require("../src/worldFlags/cm.png")},
            {name : "China",
            path : require("../src/worldFlags/cn.png")},
            {name : "Colombia",
            path : require("../src/worldFlags/co.png")},
            {name : "Costa Rica",
            path : require("../src/worldFlags/cr.png")},
            {name : "Cuba",
            path : require("../src/worldFlags/cu.png")},
            {name : "Cape Verde",
            path : require("../src/worldFlags/cv.png")},
            {name : "Curaçao",
            path : require("../src/worldFlags/cw.png")},
            {name : "Christmas Island",
            path : require("../src/worldFlags/cx.png")},
            {name : "Cyprus",
            path : require("../src/worldFlags/cy.png")},
            {name : "Czech Republic",
            path : require("../src/worldFlags/cz.png")},
            {name : "Germany",
            path : require("../src/worldFlags/de.png")},
            {name : "Djibouti",
            path : require("../src/worldFlags/dj.png")},
            {name : "Denmark",
            path : require("../src/worldFlags/dk.png")},
            {name : "Dominica",
            path : require("../src/worldFlags/dm.png")},
            {name : "Dominican Republic",
            path : require("../src/worldFlags/do.png")},
            {name : "Algeria",
            path : require("../src/worldFlags/dz.png")},
            {name : "Ecuador",
            path : require("../src/worldFlags/ec.png")},
            {name : "Estonia",
            path : require("../src/worldFlags/ee.png")},
            {name : "Egypt",
            path : require("../src/worldFlags/eg.png")},
            {name : "Western Sahara",
            path : require("../src/worldFlags/eh.png")},
            {name : "Eritrea",
            path : require("../src/worldFlags/er.png")},
            {name : "Spain",
            path : require("../src/worldFlags/es.png")},
            {name : "Ethiopia",
            path : require("../src/worldFlags/et.png")},
            {name : "Finland",
            path : require("../src/worldFlags/fi.png")},
            {name : "Fiji",
            path : require("../src/worldFlags/fj.png")},
            {name : "Falkland Islands (Malvinas)",
            path : require("../src/worldFlags/fk.png")},
            {name : "Federated States of Micronesia",
            path : require("../src/worldFlags/fm.png")},
            {name : "Faroe Islands",
            path : require("../src/worldFlags/fo.png")},
            {name : "France",
            path : require("../src/worldFlags/fr.png")},
            {name : "Gabon",
            path : require("../src/worldFlags/ga.png")},
            {name : "United Kingdom (England)",
            path : require("../src/worldFlags/gb-eng.png")},
            {name : "United Kingdom (Northern Ireland)",
            path : require("../src/worldFlags/gb-nir.png")},
            {name : "United Kingdom (Scotland)",
            path : require("../src/worldFlags/gb-sct.png")},
            {name : "United Kingdom (Wales)",
            path : require("../src/worldFlags/gb-wls.png")},
            {name : "United Kingdom",
            path : require("../src/worldFlags/gb.png")},
            {name : "Grenada",
            path : require("../src/worldFlags/gd.png")},
            {name : "Georgia",
            path : require("../src/worldFlags/ge.png")},
            {name : "French Guiana",
            path : require("../src/worldFlags/gf.png")},
            {name : "Guernsey",
            path : require("../src/worldFlags/gg.png")},
            {name : "Ghana",
            path : require("../src/worldFlags/gh.png")},
            {name : "Gibraltar",
            path : require("../src/worldFlags/gi.png")},
            {name : "Greenland",
            path : require("../src/worldFlags/gl.png")},
            {name : "Gambia",
            path : require("../src/worldFlags/gm.png")},
            {name : "Guinea",
            path : require("../src/worldFlags/gn.png")},
            {name : "Guadeloupe",
            path : require("../src/worldFlags/gp.png")},
            {name : "Equatorial Guinea",
            path : require("../src/worldFlags/gq.png")},
            {name : "Greece",
            path : require("../src/worldFlags/gr.png")},
            {name : "South Georgia and the South Sandwich Islands",
            path : require("../src/worldFlags/gs.png")},
            {name : "Guatemala",
            path : require("../src/worldFlags/gt.png")},
            {name : "Guam",
            path : require("../src/worldFlags/gu.png")},
            {name : "Guinea-Bissau",
            path : require("../src/worldFlags/gw.png")},
            {name : "Guyana",
            path : require("../src/worldFlags/gy.png")},
            {name : "Hong Kong",
            path : require("../src/worldFlags/hk.png")},
            {name : "Heard Island and McDonald Islands",
            path : require("../src/worldFlags/hm.png")},
            {name : "Honduras",
            path : require("../src/worldFlags/hn.png")},
            {name : "Croatia",
            path : require("../src/worldFlags/hr.png")},
            {name : "Haiti",
            path : require("../src/worldFlags/ht.png")},
            {name : "Hungary",
            path : require("../src/worldFlags/hu.png")},
            {name : "Indonesia",
            path : require("../src/worldFlags/id.png")},
            {name : "Ireland",
            path : require("../src/worldFlags/ie.png")},
            {name : "Israel",
            path : require("../src/worldFlags/il.png")},
            {name : "Isle of Man",
            path : require("../src/worldFlags/im.png")},
            {name : "India",
            path : require("../src/worldFlags/in.png")},
            {name : "British Indian Ocean Territory",
            path : require("../src/worldFlags/io.png")},
            {name : "Iraq",
            path : require("../src/worldFlags/iq.png")},
            {name : "Iran",
            path : require("../src/worldFlags/ir.png")},
            {name : "Iceland",
            path : require("../src/worldFlags/is.png")},
            {name : "Italy",
            path : require("../src/worldFlags/it.png")},
            {name : "Jersey",
            path : require("../src/worldFlags/je.png")},
            {name : "Jamaica",
            path : require("../src/worldFlags/jm.png")},
            {name : "Jordan",
            path : require("../src/worldFlags/jo.png")},
            {name : "Japan",
            path : require("../src/worldFlags/jp.png")},
            {name : "Kenya",
            path : require("../src/worldFlags/ke.png")},
            {name : "Kyrgyzstan",
            path : require("../src/worldFlags/kg.png")},
            {name : "Cambodia",
            path : require("../src/worldFlags/kh.png")},
            {name : "Kiribati",
            path : require("../src/worldFlags/ki.png")},
            {name : "Comoros",
            path : require("../src/worldFlags/km.png")},
            {name : "Saint Kitts and Nevis",
            path : require("../src/worldFlags/kn.png")},
            {name : "North Korea",
            path : require("../src/worldFlags/kp.png")},
            {name : "South Korea",
            path : require("../src/worldFlags/kr.png")},
            {name : "Kuwait",
            path : require("../src/worldFlags/kw.png")},
            {name : "Cayman Islands",
            path : require("../src/worldFlags/ky.png")},
            {name : "Kazakhstan",
            path : require("../src/worldFlags/kz.png")},
            {name : "Laos",
            path : require("../src/worldFlags/la.png")},
            {name : "Lebanon",
            path : require("../src/worldFlags/lb.png")},
            {name : "Saint Lucia",
            path : require("../src/worldFlags/lc.png")},
            {name : "Liechtenstein",
            path : require("../src/worldFlags/li.png")},
            {name : "Sri Lanka",
            path : require("../src/worldFlags/lk.png")},
            {name : "Liberia",
            path : require("../src/worldFlags/lr.png")},
            {name : "Lesotho",
            path : require("../src/worldFlags/ls.png")},
            {name : "Lithuania",
            path : require("../src/worldFlags/lt.png")},
            {name : "Luxembourg",
            path : require("../src/worldFlags/lu.png")},
            {name : "Latvia",
            path : require("../src/worldFlags/lv.png")},
            {name : "Libya",
            path : require("../src/worldFlags/ly.png")},
            {name : "Morocco",
            path : require("../src/worldFlags/ma.png")},
            {name : "Monaco",
            path : require("../src/worldFlags/mc.png")},
            {name : "Moldova",
            path : require("../src/worldFlags/md.png")},
            {name : "Montenegro",
            path : require("../src/worldFlags/me.png")},
            {name : "Saint Martin",
            path : require("../src/worldFlags/mf.png")},
            {name : "Madagascar",
            path : require("../src/worldFlags/mg.png")},
            {name : "Marshall Islands",
            path : require("../src/worldFlags/mh.png")},
            {name : "North Macedonia",
            path : require("../src/worldFlags/mk.png")},
            {name : "Mali",
            path : require("../src/worldFlags/ml.png")},
            {name : "Myanmar",
            path : require("../src/worldFlags/mm.png")},
            {name : "Mongolia",
            path : require("../src/worldFlags/mn.png")},
            {name : "Macao",
            path : require("../src/worldFlags/mo.png")},
            {name : "Northern Mariana Islands",
            path : require("../src/worldFlags/mp.png")},
            {name : "Martinique",
            path : require("../src/worldFlags/mq.png")},
            {name : "Mauritania",
            path : require("../src/worldFlags/mr.png")},
            {name : "Montserrat",
            path : require("../src/worldFlags/ms.png")},
            {name : "Malta",
            path : require("../src/worldFlags/mt.png")},
            {name : "Mauritius",
            path : require("../src/worldFlags/mu.png")},
            {name : "Maldives",
            path : require("../src/worldFlags/mv.png")},
            {name : "Malawi",
            path : require("../src/worldFlags/mw.png")},
            {name : "Mexico",
            path : require("../src/worldFlags/mx.png")},
            {name : "Malaysia",
            path : require("../src/worldFlags/my.png")},
            {name : "Mozambique",
            path : require("../src/worldFlags/mz.png")},
            {name : "Namibia",
            path : require("../src/worldFlags/na.png")},
            {name : "New Caledonia",
            path : require("../src/worldFlags/nc.png")},
            {name : "Niger",
            path : require("../src/worldFlags/ne.png")},
            {name : "Norfolk Island",
            path : require("../src/worldFlags/nf.png")},
            {name : "Nigeria",
            path : require("../src/worldFlags/ng.png")},
            {name : "Nicaragua",
            path : require("../src/worldFlags/ni.png")},
            {name : "Netherlands",
            path : require("../src/worldFlags/nl.png")},
            {name : "Norway",
            path : require("../src/worldFlags/no.png")},
            {name : "Nepal",
            path : require("../src/worldFlags/np.png")},
            {name : "Nauru",
            path : require("../src/worldFlags/nr.png")},
            {name : "Niue",
            path : require("../src/worldFlags/nu.png")},
            {name : "New Zealand",
            path : require("../src/worldFlags/nz.png")},
            {name : "Oman",
            path : require("../src/worldFlags/om.png")},
            {name : "Panama",
            path : require("../src/worldFlags/pa.png")},
            {name : "Peru",
            path : require("../src/worldFlags/pe.png")},
            {name : "French Polynesia",
            path : require("../src/worldFlags/pf.png")},
            {name : "Papua New Guinea",
            path : require("../src/worldFlags/pg.png")},
            {name : "Philippines",
            path : require("../src/worldFlags/ph.png")},
            {name : "Pakistan",
            path : require("../src/worldFlags/pk.png")},
            {name : "Poland",
            path : require("../src/worldFlags/pl.png")},
            {name : "Saint Pierre and Miquelon",
            path : require("../src/worldFlags/pm.png")},
            {name : "Pitcairn",
            path : require("../src/worldFlags/pn.png")},
            {name : "Puerto Rico",
            path : require("../src/worldFlags/pr.png")},
            {name : "Palestine",
            path : require("../src/worldFlags/ps.png")},
            {name : "Portugal",
            path : require("../src/worldFlags/pt.png")},
            {name : "Palau",
            path : require("../src/worldFlags/pw.png")},
            {name : "Paraguay",
            path : require("../src/worldFlags/py.png")},
            {name : "Qatar",
            path : require("../src/worldFlags/qa.png")},
            {name : "Réunion",
            path : require("../src/worldFlags/re.png")},
            {name : "Romania",
            path : require("../src/worldFlags/ro.png")},
            {name : "Serbia",
            path : require("../src/worldFlags/rs.png")},
            {name : "Russia",
            path : require("../src/worldFlags/ru.png")},
            {name : "Rwanda",
            path : require("../src/worldFlags/rw.png")},
            {name : "Saudi Arabia",
            path : require("../src/worldFlags/sa.png")},
            {name : "Solomon Islands",
            path : require("../src/worldFlags/sb.png")},
            {name : "Seychelles",
            path : require("../src/worldFlags/sc.png")},
            {name : "Sudan",
            path : require("../src/worldFlags/sd.png")},
            {name : "Sweden",
            path : require("../src/worldFlags/se.png")},
            {name : "Singapore",
            path : require("../src/worldFlags/sg.png")},
            {name : "Saint Helena, Ascension and Tristan da Cunha",
            path : require("../src/worldFlags/sh.png")},
            {name : "Slovenia",
            path : require("../src/worldFlags/si.png")},
            {name : "Svalbard and Jan Mayen",
            path : require("../src/worldFlags/sj.png")},
            {name : "Slovakia",
            path : require("../src/worldFlags/sk.png")},
            {name : "Sierra Leone",
            path : require("../src/worldFlags/sl.png")},
            {name : "San Marino",
            path : require("../src/worldFlags/sm.png")},
            {name : "Senegal",
            path : require("../src/worldFlags/sn.png")},
            {name : "Somalia",
            path : require("../src/worldFlags/so.png")},
            {name : "Suriname",
            path : require("../src/worldFlags/sr.png")},
            {name : "South Sudan",
            path : require("../src/worldFlags/ss.png")},
            {name : "São Tomé and Príncipe",
            path : require("../src/worldFlags/st.png")},
            {name : "El Salvador",
            path : require("../src/worldFlags/sv.png")},
            {name : "Sint Maarten",
            path : require("../src/worldFlags/sx.png")},
            {name : "Syria",
            path : require("../src/worldFlags/sy.png")},
            {name : "Eswatini",
            path : require("../src/worldFlags/sz.png")},
            {name : "Turks and Caicos Islands",
            path : require("../src/worldFlags/tc.png")},
            {name : "Chad",
            path : require("../src/worldFlags/td.png")},
            {name : "French Southern Territories",
            path : require("../src/worldFlags/tf.png")},
            {name : "Togo",
            path : require("../src/worldFlags/tg.png")},
            {name : "Thailand",
            path : require("../src/worldFlags/th.png")},
            {name : "Tajikistan",
            path : require("../src/worldFlags/tj.png")},
            {name : "Tokelau",
            path : require("../src/worldFlags/tk.png")},
            {name : "Timor-Leste",
            path : require("../src/worldFlags/tl.png")},
            {name : "Turkmenistan",
            path : require("../src/worldFlags/tm.png")},
            {name : "Tunisia",
            path : require("../src/worldFlags/tn.png")},
            {name : "Tonga",
            path : require("../src/worldFlags/to.png")},
            {name : "Turkey",
            path : require("../src/worldFlags/tr.png")},
            {name : "Trinidad and Tobago",
            path : require("../src/worldFlags/tt.png")},
            {name : "Tuvalu",
            path : require("../src/worldFlags/tv.png")},
            {name : "Taiwan",
            path : require("../src/worldFlags/tw.png")},
            {name : "Tanzania",
            path : require("../src/worldFlags/tz.png")},
            {name : "Ukraine",
            path : require("../src/worldFlags/ua.png")},
            {name : "Uganda",
            path : require("../src/worldFlags/ug.png")},
            {name : "United States Minor Outlying Islands",
            path : require("../src/worldFlags/um.png")},
            {name : "United States of America",
            path : require("../src/worldFlags/us.png")},
            {name : "Uruguay",
            path : require("../src/worldFlags/uy.png")},
            {name : "Uzbekistan",
            path : require("../src/worldFlags/uz.png")},
            {name : "Vatican City",
            path : require("../src/worldFlags/va.png")},
            {name : "Saint Vincent and the Grenadines",
            path : require("../src/worldFlags/vc.png")},
            {name : "Venezuela",
            path : require("../src/worldFlags/ve.png")},
            {name : "British Virgin Islands",
            path : require("../src/worldFlags/vg.png")},
            {name : "United States Virgin Islands",
            path : require("../src/worldFlags/vi.png")},
            {name : "Vietnam",
            path : require("../src/worldFlags/vn.png")},
            {name : "Vanuatu",
            path : require("../src/worldFlags/vu.png")},
            {name : "Wallis and Futuna",
            path : require("../src/worldFlags/wf.png")},
            {name : "Samoa",
            path : require("../src/worldFlags/ws.png")},
            {name : "Kosovo",
            path : require("../src/worldFlags/xk.png")},
            {name : "Yemen",
            path : require("../src/worldFlags/ye.png")},
            {name : "Mayotte",
            path : require("../src/worldFlags/yt.png")},
            {name : "South Africa",
            path : require("../src/worldFlags/za.png")},
            {name : "Zambia",
            path : require("../src/worldFlags/zm.png")},
            {name : "Zimbabwe",
            path : require("../src/worldFlags/zw.png")},
            ]
            
return paths;
    }
}

export default Path