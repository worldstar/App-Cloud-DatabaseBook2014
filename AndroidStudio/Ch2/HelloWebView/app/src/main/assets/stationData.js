﻿//CPC Station information. [longitute, Latitude, Address]
var numberOfStations = 592;
var CPCStationInformation = [
[121.65757,24.66716,'宜蘭縣三星鄉三星路四段235號' ],
[121.58837,24.69712,'宜蘭縣大同鄉崙埤村泰雅路1段92號' ],
[121.36560,24.40339,'宜蘭縣大同鄉南山村泰雅路7段226號' ],
[121.82685,24.68057,'宜蘭縣五結鄉五濱路二段206號' ],
[121.76926,24.69756,'宜蘭縣五結鄉中正路二段94號' ],
[121.78685,24.64165,'宜蘭縣冬山鄉冬山路二段260號' ],
[121.77200,24.66670,'宜蘭縣冬山鄉冬山路五段165號' ],
[121.78273,24.74750,'宜蘭縣壯圍鄉吉祥村壯五路391號' ],
[121.81484,24.78985,'宜蘭縣壯圍鄉壯濱路五段310號' ],
[121.75683,24.77073,'宜蘭縣宜蘭市中山路五段139號' ],
[121.73071,24.74746,'宜蘭縣員山鄉員山路一段31號' ],
[121.87083,24.90574,'宜蘭縣頭城鎮濱海路三段326號' ],
[121.92825,24.97178,'宜蘭縣頭城鎮濱海路七段81號' ],
[121.82850,24.86457,'宜蘭縣頭城鎮開蘭路300號' ],
[121.77780,24.83013,'宜蘭縣礁溪鄉礁溪路六段28號' ],
[121.77211,24.66847,'宜蘭縣羅東鎮中正南路9號' ],
[121.83468,24.62561,'宜蘭縣蘇澳鎮蘇濱路二段459號' ],
[121.86772,24.58244,'宜蘭縣蘇澳鎮南安里漁港路52-1號' ],
[121.84703,24.59599,'宜蘭縣蘇澳鎮中山路一段196號' ],
[121.70438,25.08388,'基隆市七堵區明德二路28號' ],
[121.68499,25.08253,'基隆市七堵區堵南街46-3號' ],
[121.72328,25.10383,'基隆市七堵區八德路2-15號' ],
[121.73314,25.13604,'基隆市中山區西定路190號' ],
[121.74037,25.13878,'基隆市中山區中山二路60號' ],
[121.76748,25.15152,'基隆市中正區中正路459號' ],
[121.76524,25.14294,'基隆市中正區祥豊街108號' ],
[121.77381,25.15118,'基隆市中正區北寧路37號' ],
[121.73792,25.12698,'基隆市仁愛區成功一路105號' ],
[121.71915,25.12677,'基隆市安樂區麥金路441號' ],
[121.70078,25.14808,'基隆市安樂區基金三路2-1號' ],
[121.75878,25.12798,'基隆市信義區東明路138號' ],
[121.72606,25.10425,'基隆市暖暖區八堵路158號' ],
[121.74968,25.09843,'基隆市暖暖區源遠路157號' ],
[121.74968,25.09843,'基隆市暖暖區源遠路157號' ],
[121.48951,25.05876,'台北縣三重市重新路三段157號' ],
[121.46794,25.04389,'台北縣三重市重新路五段652號' ],
[121.49272,25.07185,'台北縣三重市忠孝路一段１號' ],
[121.37790,24.93089,'台北縣三峽鎮介壽路一段193號' ],
[121.36629,24.91486,'台北縣三峽鎮中正路二段165號' ],
[121.45604,24.99614,'台北縣土城市四川路１號' ],
[121.44069,24.97414,'台北縣土城市中央路二段280號' ],
[121.48359,25.00509,'台北縣中和市中山路二段550號' ],
[121.50785,24.99948,'台北縣中和市中和路260號' ],
[121.43904,25.08230,'台北縣五股鄉中興路四段21號' ],
[121.51967,25.00494,'台北縣永和市永利路69號' ],
[121.64003,25.06006,'台北縣汐止市大同路一段353號' ],
[121.67418,25.07441,'台北縣汐止市大同路三段186-1號' ],
[121.70219,24.93774,'台北縣坪林鄉坪林村水柳腳188-1號' ],
[121.39694,25.07791,'台北縣林口鄉東林村中山路１號' ],
[121.46346,25.00912,'台北縣板橋市民族路90號' ],
[121.46276,25.01310,'台北縣板橋市民生路二段臨89-6號' ],
[121.46276,25.01310,'台北縣板橋市民生路二段臨56-1號' ],
[121.48067,25.01937,'台北縣板橋市中山路二段320號' ],
[121.63373,25.22489,'台北縣金山鄉中山路385號' ],
[121.42698,25.06448,'台北縣泰山鄉泰林路二段424號' ],
[121.43870,25.05174,'台北縣泰山鄉中山路二段61號' ],
[121.92898,25.06115,'台北縣貢寮鄉真理村美艷山街6-2號' ],
[121.45419,25.19290,'台北縣淡水鎮埤島里二鄰淡金路2段599號' ],
[121.45033,25.16440,'台北縣淡水鎮中正東路1號' ],
[121.54195,24.96842,'台北縣新店市北新路一段90號' ],
[121.54883,24.97738,'台北縣新店市寶橋路219號' ],
[121.52558,24.93999,'台北縣新店市新烏路2段202號' ],
[121.54227,24.97853,'台北縣新店市北新路二段205號' ],
[121.53402,24.98048,'台北縣新店市中正路470號' ],
[121.45985,25.04024,'台北縣新莊市思源路41-1號' ],
[121.45603,25.06475,'台北縣新莊市五工路99-3號' ],
[121.44529,25.03468,'台北縣新莊市中正路338號' ],
[121.80150,25.10677,'台北縣瑞芳鎮中山路200號' ],
[121.68599,25.18560,'台北縣萬里鄉龜吼村美崙31-1號' ],
[121.43012,24.99952,'台北縣樹林市樹新路207號' ],
[121.41548,25.00874,'台北縣樹林市中正路433號' ],
[121.47124,25.08373,'台北縣蘆洲市蘆洲市三民路550號' ],
[121.47307,25.08537,'台北縣蘆洲市三民路99號' ],
[121.46884,25.07717,'台北縣蘆洲市中山二路309號' ],
[121.35208,24.95033,'台北縣鶯歌鎮文化路152號' ],
[121.34079,24.95294,'台北縣鶯歌鎮鶯桃路永新巷1號' ],
[121.51182,25.08489,'台北市士林區重慶北路四段198號' ],
[121.52626,25.08748,'台北市士林區文林路100號' ],
[121.49873,25.09262,'台北市士林區延平北路六段477號' ],
[121.51439,25.06284,'台北市大同區民權西路194號' ],
[121.53531,25.02581,'台北市大安區和平東路二段2號' ],
[121.55547,25.03292,'台北市大安區信義路四段374號' ],
[121.55692,25.01914,'台北市大安區富陽街129號' ],
[121.55587,25.02761,'台北市大安區基隆路二段162號' ],
[121.53310,25.03843,'台北市大安區仁愛路三段1號' ],
[121.52694,25.03156,'台北市大安區金山南路二段77號' ],
[121.52805,25.05655,'台北市中山區新生北路二段71號' ],
[121.53020,25.05089,'台北市中山區吉林路31號' ],
[121.53960,25.04636,'台北市中山區八德路二段214號' ],
[121.55065,25.08425,'台北市中山區明水路661號' ],
[121.53670,25.06568,'台北市中山區建國北路三段91號之1' ],
[121.52581,25.02076,'台北市中正區汀州路三段１號' ],
[121.50730,25.03139,'台北市中正區莒光路2號' ],
[121.52389,25.04615,'台北市中正區林森北路11號' ],
[121.59852,25.06917,'台北市內湖區民權東路六段50號' ],
[121.55985,25.08501,'台北市內湖區內湖路一段59號' ],
[121.61186,25.06753,'台北市內湖區康寧路三段225號' ],
[121.60586,25.06416,'台北市內湖區安康路282號' ],
[121.57104,25.08132,'台北市內湖區內湖路一段362號' ],
[121.56415,24.98854,'台北市文山區木柵路三段2號' ],
[121.53948,25.00445,'台北市文山區興隆路一段13號' ],
[121.46630,25.12708,'台北市北投區中央北路四段584號' ],
[121.51136,25.10801,'台北市北投區承德路六段427號' ],
[121.50274,25.13636,'台北市北投區承德路七段384號' ],
[121.55811,25.04905,'台北市松山區光復北路9號' ],
[121.54442,25.04952,'台北市松山區復興北路31號' ],
[121.55820,25.07178,'台北市松山區濱江街373號' ],
[121.56373,25.05938,'台北市松山區三民路126號' ],
[121.57762,25.03967,'台北市信義區松山路480號' ],
[121.56719,25.04157,'台北市信義區忠孝東路五段69號' ],
[121.60450,25.05415,'台北市南港區南港路二段50號' ],
[121.49703,25.02629,'台北市萬華區環河南路二段274之2及177之1' ],
[121.50332,25.03828,'台北市萬華區桂林路53號' ],
[121.54842,25.12559,'台北市士林區台北市士林區重慶北路四段198號' ],
[121.54842,25.12559,'台北市士林區陽明山格致路3號' ],
[121.52766,25.09240,'台北市士林區中山北路五段465號' ],
[121.31628,24.94564,'桃園縣八德市興豐路1810號' ],
[121.27134,24.93279,'桃園縣八德市竹園里長興路556號' ],
[121.26984,24.97725,'桃園縣八德市茄苳里中華路575號' ],
[121.20237,25.06475,'桃園縣大園鄉橫峰村1鄰民生南路163號' ],
[121.19913,25.06322,'桃園縣大園鄉中正東路58號' ],
[121.24740,25.10357,'桃園縣大園鄉海口村三民路一段158號' ],
[121.20811,25.07837,'桃園縣大園鄉圳頭村國際路一段772號' ],
[121.24917,25.08918,'桃園縣大園鄉埔心村航勤南路2號' ],
[121.22738,25.07266,'桃園縣大園鄉埔心村航站北路33號' ],
[121.27963,24.88584,'桃園縣大溪鎮瑞興里20鄰瑞安路一段268號' ],
[121.28508,24.84660,'桃園縣大溪鎮復興路一段970號' ],
[121.29697,24.86584,'桃園縣大溪鎮溪義和里州山腳32-6號' ],
[121.19307,24.95833,'桃園縣中壢市五權里民族路三段226號' ],
[121.23850,24.96536,'桃園縣中壢市中華路二段230號' ],
[121.23314,24.96339,'桃園縣中壢市延平路33號' ],
[121.23003,24.94429,'桃園縣中壢市環中東路二段659號' ],
[121.23122,25.00378,'桃園縣中壢市內定里下內壢85-13.15號' ],
[121.24699,24.98002,'桃園縣中壢市吉林路37巷15號' ],
[121.22208,24.98991,'桃園縣中壢市新生路三段85號' ],
[121.24600,24.95519,'桃園縣中壢市環中東路675號' ],
[121.21278,24.92674,'桃園縣平鎮市新富里中豐路一段298號' ],
[121.22505,24.91579,'桃園縣平鎮市南東路575號' ],
[121.21100,24.94817,'桃園縣平鎮市延平路二段152號' ],
[121.30519,24.98015,'桃園縣桃園市介壽路324號' ],
[121.30002,24.99197,'桃園縣桃園市中山路522號' ],
[121.32051,24.99962,'桃園縣桃園市三民路一段150號' ],
[121.31039,25.01031,'桃園縣桃園市春日路971號' ],
[121.28519,24.98824,'桃園縣桃園市中山路1020號' ],
[121.35425,24.82308,'桃園縣復興鄉澤仁村中正路267號' ],
[121.11032,24.97081,'桃園縣新屋鄉中山路85號' ],
[121.09347,24.93385,'桃園縣楊梅鎮民富路三段574號' ],
[121.17163,24.92327,'桃園縣楊梅鎮幼獅工業區獅二路16號' ],
[121.13419,24.90636,'桃園縣楊梅鎮大平里中山南路259號' ],
[121.15931,24.90875,'桃園縣楊梅鎮中山北路一段391號' ],
[121.17470,24.91190,'桃園縣楊梅鎮中山北路二段308號' ],
[121.14574,24.90726,'桃園縣楊梅鎮中山路96號' ],
[121.21718,24.86759,'桃園縣龍潭鄉北龍路264號' ],
[121.21272,24.88897,'桃園縣龍潭鄉烏林村中豐路716號' ],
[121.36563,25.05829,'桃園縣龜山鄉復興一路201號' ],
[121.34397,25.00151,'桃園縣龜山鄉長壽路109-1號' ],
[121.39983,25.01625,'桃園縣龜山鄉龍壽村萬壽路一段383號' ],
[121.37035,25.06138,'桃園縣龜山鄉樂善村文化一路33號' ],
[121.34628,24.99988,'桃園縣龜山鄉萬壽路二段640號' ],
[121.29118,25.04937,'桃園縣蘆竹鄉錦興村中正路342號' ],
[121.26079,25.02280,'桃園縣蘆竹鄉大竹村大竹路503號' ],
[121.07875,25.02769,'桃園縣觀音鄉三和村濱海路武威段2號' ],
[121.13954,25.01065,'桃園縣觀音鄉大同村中山路二段794號' ],
[121.08526,25.03467,'桃園縣觀音鄉廣興村中山路一段166號' ],
[121.06791,24.66314,'新竹縣北埔鄉水際村麻布樹排23-2號' ],
[121.20385,24.71188,'新竹縣尖石鄉嘉樂村2鄰麥樹仁66號' ],
[121.01497,24.82415,'新竹縣竹北市縣政二路112號' ],
[121.00524,24.84120,'新竹縣竹北市中華路439號' ],
[121.09648,24.72246,'新竹縣竹東鎮東寧路一段2號' ],
[121.09178,24.73732,'新竹縣竹東鎮東林路111號' ],
[121.09948,24.72651,'新竹縣竹東鎮北興路一段40號' ],
[121.07735,24.77766,'新竹縣芎林鄉上山村文山路554號' ],
[121.03064,24.67964,'新竹縣峨眉鄉峨眉村3-1號' ],
[121.04771,24.89681,'新竹縣湖口鄉中正路二段20號' ],
[121.03669,24.87997,'新竹縣湖口鄉湖南村十二鄰八德路一段396號' ],
[121.05503,24.87836,'新竹縣湖口鄉湖鏡村中正路3段346號' ],
[121.07893,24.88567,'新竹縣湖口鄉湖口村八德路二段461號' ],
[121.00014,24.87251,'新竹縣湖口鄉新興路330號' ],
[121.06848,24.82753,'新竹縣新埔鎮中正路902號' ],
[120.98335,24.90690,'新竹縣新豐鄉重興村新庄路429號' ],
[121.12902,24.72619,'新竹縣橫山鄉大肚村中豐路二段96號' ],
[121.17993,24.79344,'新竹縣關西鎮中豐路二段50號' ],
[121.19122,24.79957,'新竹縣關西鎮東安里11鄰上山屯14之10號' ],
[120.99910,24.74279,'新竹縣寶山鄉雙新村寶新路4鄰1段65號' ],
[120.98665,24.80158,'新竹市新竹市光復路二段716號' ],
[120.91420,24.76703,'新竹市新竹市中華路五段54號' ],
[120.98665,24.80158,'新竹市新竹市光復路二段1號' ],
[120.96589,24.80837,'新竹市新竹市北大路374號' ],
[120.93684,24.84009,'新竹市新竹市東大路四段292號' ],
[120.97712,24.81462,'新竹市新竹市經國路一段2-2號' ],
[120.76948,24.38926,'苗栗縣三義鄉廣義村中正路146號' ],
[120.95460,24.64826,'苗栗縣三灣鄉三灣村中正路7-2號' ],
[120.88147,24.44152,'苗栗縣大湖鄉富興村2-1號' ],
[120.82496,24.51188,'苗栗縣公館鄉玉泉村玉泉24-4號' ],
[120.83841,24.50192,'苗栗縣公館鄉苗栗縣公館鄉五穀村五穀201號' ],
[120.82326,24.50212,'苗栗縣公館鄉館南村9鄰館南253-1號' ],
[120.81920,24.52808,'苗栗縣公館鄉五谷村二鄰五谷76-1號' ],
[120.85527,24.67211,'苗栗縣竹南鎮海口里21鄰海口366號' ],
[120.88865,24.70445,'苗栗縣竹南鎮山佳里公義路485號' ],
[120.87204,24.68379,'苗栗縣竹南鎮中正路120號' ],
[120.88349,24.68478,'苗栗縣竹南鎮東平路101號' ],
[120.86035,24.69362,'苗栗縣竹南鎮竹興里博愛街869號' ],
[120.78708,24.48799,'苗栗縣銅鑼鄉銅鑼村中正路151號' ],
[120.88300,24.67190,'苗栗縣頭份鎮蘆竹里永貞路一段22號' ],
[120.89272,24.68281,'苗栗縣頭份鎮東庄里六鄰自強路二段170號' ],
[120.88494,24.67789,'苗栗縣頭份鎮蘆竹路270號' ],
[120.91258,24.69050,'苗栗縣頭份鎮自強路2號' ],
[120.89576,24.67615,'苗栗縣頭份鎮中華路444號' ],
[120.89537,24.67660,'苗栗縣頭份鎮蘆竹里中華路519號' ],
[120.86999,24.57217,'苗栗縣頭屋鄉象山村198-3號' ],
[120.76169,23.88013,'南投縣中寮鄉永平村永平路349-13號' ],
[121.13138,24.01959,'南投縣仁愛鄉大同村仁和路14號' ],
[120.85783,23.80868,'南投縣水里鄉南光村民生路7-1號' ],
[120.70186,23.83933,'南投縣名間鄉中正村南雅街151號' ],
[120.68497,23.75833,'南投縣竹山鎮竹山里集山路三段884號' ],
[120.71488,23.80013,'南投縣竹山鎮山崇里集山路二段419唬' ],
[120.70977,23.77508,'南投縣竹山鎮延平里集山路二段869號' ],
[120.85345,23.71038,'南投縣信義鄉明德村玉山路116號' ],
[120.68383,23.90981,'南投縣南投市三民里彰南路二段71號' ],
[120.67121,23.92280,'南投縣南投市平山里仁和路13號' ],
[120.66520,23.93706,'南投縣南投市南崗三路278-1號' ],
[120.69065,23.90670,'南投縣南投市三和里中興路549號' ],
[120.68993,23.90969,'南投縣南投市平和里民族街163號' ],
[120.71088,23.90016,'南投縣南投市南鄉路250巷142弄8號' ],
[120.97217,23.96876,'南投縣埔里鎮中山路二段141號' ],
[120.96173,23.96786,'南投縣埔里鎮中山路三段172號' ],
[120.68659,23.98462,'南投縣草屯鎮玉峰里中正路880號' ],
[120.68994,23.99971,'南投縣草屯鎮中正路1615號' ],
[120.82799,24.02419,'南投縣國姓鄉福龜村中正路一段55號' ],
[120.91716,23.87201,'南投縣魚池鄉水社村中山路20號' ],
[120.92883,23.90262,'南投縣魚池鄉魚池村魚池街772號' ],
[120.79530,23.67573,'南投縣鹿谷鄉內湖村興產路4-5號' ],
[120.75241,23.74798,'南投縣鹿谷鄉鹿谷村中正路二段137號' ],
[120.77566,23.82618,'南投縣集集鎮林尾里民生路317號' ],
[120.63185,24.35470,'台中縣大甲鎮頂店里中山路一段1120號' ],
[120.64209,24.36598,'台中縣大甲鎮經國路1666號' ],
[120.58875,24.34346,'台中縣大安鄉東安村中山南路193號' ],
[120.54981,24.14023,'台中縣大肚鄉新興村沙田路二段222號' ],
[120.57453,24.11923,'台中縣大肚鄉沙田路一段167號' ],
[120.68945,24.11739,'台中縣大里市西榮里中興路二段691號' ],
[120.64842,24.21807,'台中縣大雅鄉中清路一段271號' ],
[120.72146,24.11990,'台中縣太平市太平路137號' ],
[120.71092,24.12668,'台中縣太平市太平里太平路651號' ],
[120.65852,24.32679,'台中縣外埔鄉大同村甲后路168號' ],
[120.78170,24.27465,'台中縣石岡鄉九房村明德路2號' ],
[120.72385,24.31572,'台中縣后里鄉三豐路427號' ],
[120.72350,24.31406,'台中縣后里鄉台中縣后里鄉月眉村1鄰雲頭路3-5號' ],
[120.75020,24.32515,'台中縣后里鄉台中縣后里鄉月眉村安眉路108號之5' ],
[120.57277,24.23143,'台中縣沙鹿鎮北勢里中棲路207號' ],
[120.90350,24.16918,'台中縣和平鄉南勢村東關路三段5號' ],
[121.24630,24.25484,'台中縣和平鄉梨山村中正路224號' ],
[120.82464,24.26131,'台中縣東勢鎮粵寧里豐勢路678號' ],
[120.63397,24.10612,'台中縣烏日鄉九德村中山路一段539號' ],
[120.62422,24.10920,'台中縣烏日鄉建國路265號' ],
[120.59363,24.10996,'台中縣烏日鄉榮泉路252號' ],
[120.69632,24.24883,'台中縣神岡鄉岸裡村中山路88號' ],
[120.53208,24.26079,'台中縣梧棲鎮八德路2號' ],
[120.54011,24.28965,'台中縣清水鎮海演里臨海路48號' ],
[120.60004,24.26839,'台中縣清水鎮吳厝里東山路141號' ],
[120.57834,24.27767,'台中縣清水鎮中山路507-18號' ],
[120.80699,24.25524,'台中縣新社鄉中正村中和街五段58號' ],
[120.70845,24.23160,'台中縣潭子鄉栗林村中山路三段409號' ],
[120.70756,24.22653,'台中縣潭子鄉栗林村中山路三段249號' ],
[120.58024,24.18988,'台中縣龍井鄉新庄村台中港路186號' ],
[120.54615,24.18135,'台中縣龍井鄉竹坑里沙田路四段175號' ],
[120.72039,24.26286,'台中縣豐原市三豐路502號' ],
[120.73462,24.25983,'台中縣豐原市豐勢路一段588號' ],
[120.69838,24.06077,'台中縣霧峰鄉中正路784號' ],
[120.69493,24.06121,'台中縣霧峰鄉林森路455號' ],
[120.67445,24.17408,'台中市北屯區文心路四段119號' ],
[120.69090,24.17103,'台中市北屯區昌平路一段95號' ],
[120.72794,24.17681,'台中市北屯區東山路一段377-5號' ],
[120.68851,24.18196,'台中市北屯區松和里松竹路427號' ],
[120.70123,24.17954,'台中市北屯區北屯路436號' ],
[120.68632,24.15512,'台中市北區錦平里三民路三段225號' ],
[120.67705,24.15574,'台中市北區大雅路94號' ],
[120.69438,24.16119,'台中市北區錦洲里進化路656號' ],
[120.68298,24.14680,'台中市北區三民路三段50號' ],
[120.61463,24.18316,'台中市西屯區台中港路三段119號' ],
[120.65013,24.16293,'台中市西屯區文心路三段2號' ],
[120.64393,24.17133,'台中市西屯區青海路二段211號' ],
[120.66795,24.14663,'台中市西區向上路一段27號' ],
[120.69476,24.13339,'台中市東區樂業里建成路556號' ],
[120.60484,24.15846,'台中市南屯區工業區18路26號之1' ],
[120.65285,24.15099,'台中市南屯區公益路二段2號' ],
[120.64174,24.14130,'台中市南屯區五權西路二段562號' ],
[120.66956,24.12903,'台中市南區復興路三段73號' ],
[120.66667,24.11952,'台中市南區和平里美村南路77號' ],
[120.66707,24.12833,'台中市南區福平里三民路一段１號' ],
[120.62070,23.80552,'彰化縣二水鄉裕民村南通路二段680號' ],
[120.37353,23.90220,'彰化縣二林鎮豐田里二溪路一段212號' ],
[120.55729,24.00105,'彰化縣大村鄉中山路三段205號' ],
[120.32973,23.86409,'彰化縣大城鄉上山村魚寮路50號' ],
[120.51988,23.87680,'彰化縣北斗鎮大道里中山路二段207號' ],
[120.54451,23.91499,'彰化縣永靖鄉港西村中山路一段637號' ],
[120.59344,23.86246,'彰化縣田中鎮北路里東閔路二段722號' ],
[120.59073,23.85009,'彰化縣田中鎮南路里員集路一段783號' ],
[120.52664,23.89051,'彰化縣田尾鄉饒平村中山路一段393號' ],
[120.53169,23.89388,'彰化縣田尾鄉饒平村中山路一段575號' ],
[120.48791,24.14342,'彰化縣伸港鄉新港村新港路95號' ],
[120.50163,24.03617,'彰化縣秀水鄉安東村彰水路一段30號' ],
[120.50261,24.10677,'彰化縣和美鎮和東里彰美路五段85號' ],
[120.58382,23.90457,'彰化縣社頭鄉員集路二段583號' ],
[120.32701,23.91978,'彰化縣芳苑鄉仁愛村斗苑路10號' ],
[120.54154,24.02410,'彰化縣花壇鄉花壇村中山路一段384號' ],
[120.62747,24.01864,'彰化縣芬園鄉彰南路四段354號' ],
[120.58102,23.92436,'彰化縣員林鎮員集路一段46號' ],
[120.57903,23.95778,'彰化縣員林鎮員東路二段413號' ],
[120.57107,23.97094,'彰化縣員林鎮三多里中山路二段495號' ],
[120.55170,23.95253,'彰化縣埔心鄉瓦北村員鹿路一段421號' ],
[120.56317,23.94620,'彰化縣埔心鄉瓦南村中山路281號' ],
[120.46052,24.00497,'彰化縣埔鹽鄉好修村員鹿路二段99號' ],
[120.49837,23.88308,'彰化縣埤頭鄉斗苑東路7號' ],
[120.45773,23.84927,'彰化縣埤頭鄉中和村彰水路一段499號' ],
[120.48905,23.85201,'彰化縣溪州鄉溪州村中山路三段6號' ],
[120.47970,23.96789,'彰化縣溪湖鎮東寮里彰水路93號' ],
[120.49336,23.95833,'彰化縣溪湖鎮彰化縣溪湖鎮員鹿路一段104號'],
[120.54402,24.07481,'彰化縣彰化市華北里中山路二段396號' ],
[120.58834,24.09539,'彰化縣彰化市三村里一鄰彰興路二段81號' ],
[120.52355,24.06661,'彰化縣彰化市平和里新平路100號' ],
[120.55381,24.08460,'彰化縣彰化市和調里中山路三段27號' ],
[120.56969,24.09480,'彰化縣彰化市國聖里中山路三段708號' ],
[120.44477,24.04759,'彰化縣福興鄉橋頭村彰鹿路七段477號' ],
[120.41499,23.77129,'雲林縣二崙鄉崙東村中山路一段102號' ],
[120.37428,23.79113,'雲林縣二崙鄉大同村大同路21號' ],
[120.18502,23.58217,'雲林縣口湖鄉湖東村中正路一段99號' ],
[120.39322,23.67875,'雲林縣土庫鎮建國路131號' ],
[120.36516,23.70411,'雲林縣土庫鎮後埔里後埔路500號' ],
[120.43429,23.64603,'雲林縣大埤鄉南和村大埤路543號' ],
[120.31338,23.64666,'雲林縣元長鄉長南村中山路４號' ],
[120.55717,23.71256,'雲林縣斗六市文化路522號' ],
[120.52484,23.72421,'雲林縣斗六市虎溪里西平路776號' ],
[120.52770,23.70079,'雲林縣斗六市雲林路二段334號' ],
[120.46907,23.67047,'雲林縣斗南鎮明昌里建國三路220號' ],
[120.47825,23.67172,'雲林縣斗南鎮南昌里延平路2段511號' ],
[120.49336,23.65840,'雲林縣斗南鎮雲林縣斗南鎮大業路114號' ],
[120.47742,23.69355,'雲林縣斗南鎮小東里大業路56號' ],
[120.46324,23.67769,'雲林縣斗南鎮中興路201號' ],
[120.48112,23.68025,'雲林縣斗南鎮延平路二段165號' ],
[120.25524,23.57282,'雲林縣水林鄉水北村顏厝寮97號' ],
[120.29887,23.57494,'雲林縣北港鎮華勝路87號' ],
[120.30173,23.58552,'雲林縣北港鎮新街里新德路27號' ],
[120.56953,23.67844,'雲林縣古坑鄉東和村12鄰廣濟路122號' ],
[120.56031,23.65040,'雲林縣古坑鄉西平村中山路291號' ],
[120.20291,23.69880,'雲林縣台西鄉中山路36號' ],
[120.15149,23.65717,'雲林縣四湖鄉崙北村海青路196號' ],
[120.22078,23.63743,'雲林縣四湖鄉施湖村中山西路199號' ],
[120.46641,23.79850,'雲林縣西螺鎮大園里大同路38號' ],
[120.26897,23.67736,'雲林縣東勢鄉復興村文化路2-10號' ],
[120.61066,23.75232,'雲林縣林內鄉林中村中正路532號' ],
[120.44667,23.70902,'雲林縣虎尾鎮平和里光復路131號' ],
[120.46064,23.69702,'雲林縣虎尾鎮興南里竹圍60號' ],
[120.43602,23.70710,'雲林縣虎尾鎮新生路155號' ],
[120.35967,23.76104,'雲林縣崙背鄉南陽村正義路123號' ],
[120.26133,23.75032,'雲林縣麥寮鄉麥豐村中山路12號' ],
[120.27156,23.78952,'雲林縣麥寮鄉橋頭村橋頭路34號' ],
[120.48072,23.77413,'雲林縣莿桐鄉義和村三和37-5號' ],
[120.49749,23.76007,'雲林縣莿桐鄉中山路251號' ],
[120.31654,23.70172,'雲林縣褒忠鄉埔姜村三民路231號' ],
[120.40376,23.49046,'嘉義市北港路1158號' ],
[120.45009,23.47464,'嘉義市文化路11號' ],
[120.45952,23.48232,'嘉義市中山路90號' ],
[120.44361,23.48050,'嘉義市林森西路281號' ],
[120.45238,23.49028,'嘉義市博愛路ㄧ段2號' ],
[120.42896,23.46904,'嘉義市博愛路二段519號' ],
[120.45416,23.46915,'嘉義市吳鳳南路92號' ],
[120.43393,23.46771,'嘉義市車店里上海路246號' ],
[120.43322,23.49213,'嘉義市自由路436號' ],
[120.45689,23.50108,'嘉義市東區頂庄里台林街393號' ],
[120.44092,23.49972,'嘉義市文化路799號' ],
[120.46118,23.61000,'嘉義縣大林鎮中正路801號' ],
[120.44974,23.59869,'嘉義縣大林鎮中正路260號' ],
[120.44720,23.60397,'嘉義縣大林鎮忠孝路343號' ],
[120.59862,23.30118,'嘉義縣大埔鄉和平村雙溪路14-3號' ],
[120.47318,23.45847,'嘉義縣中埔鄉和美村大義路515號' ],
[120.52250,23.42586,'嘉義縣中埔鄉中埔村中埔161-4號' ],
[120.25792,23.51263,'嘉義縣六腳鄉六腳村六腳路2-15號' ],
[120.29309,23.49641,'嘉義縣六腳鄉蒜頭村1-15號' ],
[120.30319,23.44731,'嘉義縣太保市安仁里嘉朴東路1段116號' ],
[120.33056,23.44981,'嘉義縣太保市春珠里春珠178號' ],
[120.37938,23.44134,'嘉義縣水上鄉大堀村江竹仔腳3-8號' ],
[120.38924,23.41949,'嘉義縣水上鄉三鎮路101-1號' ],
[120.41550,23.43428,'嘉義縣水上鄉柳林村柳子林76-6號' ],
[120.15738,23.37943,'嘉義縣布袋鎮興中里福德路１號' ],
[120.43368,23.54811,'嘉義縣民雄鄉東湖村建國路二段250號' ],
[120.45473,23.52818,'嘉義縣民雄鄉福樂村中山路37號' ],
[120.42607,23.55507,'嘉義縣民雄鄉保生街220號' ],
[120.43350,23.55075,'嘉義縣民雄鄉建國路二段329號' ],
[120.39922,23.55720,'嘉義縣民雄鄉菁埔村菁埔1號之10' ],
[120.24221,23.46101,'嘉義縣朴子市南通路三段635號' ],
[120.25416,23.46045,'嘉義縣朴子市大鄉里大?榔852號' ],
[120.25518,23.46582,'嘉義縣朴子市大鄉里大棣榔625號' ],
[120.68968,23.46343,'嘉義縣竹崎鄉中和村永和1-1號' ],
[120.54782,23.51583,'嘉義縣竹崎鄉和平村田寮52號' ],
[120.15749,23.45818,'嘉義縣東石鄉東石村4-1號' ],
[120.80155,23.50820,'嘉義縣阿里山中山村南阿里山74號' ],
[120.54443,23.58995,'嘉義縣梅山鄉梅北村中山路746號' ],
[120.53654,23.57675,'嘉義縣梅山鄉過山村7鄰開元后46號' ],
[120.34400,23.40890,'嘉義縣鹿草鄉後堀村山仔腳59號' ],
[120.53800,23.47180,'嘉義縣番路鄉下坑村下坑40-2號' ],
[120.34664,23.54027,'嘉義縣新港鄉菜公村菜公厝64-1號' ],
[120.40050,23.60233,'嘉義縣溪口鄉溪東村民族西路1號' ],
[120.25848,23.33743,'嘉義縣義竹鄉義竹村118號之6' ],
[120.13138,23.13792,'台南縣七股鄉玉成村玉成18-2號' ],
[120.27001,23.23845,'台南縣下營鄉中山路一段386號' ],
[120.35445,23.12697,'台南縣大內鄉石城村石子瀨122-12號' ],
[120.34067,23.11478,'台南縣山上鄉明和村232號' ],
[120.25306,22.90632,'台南縣仁德鄉中洲村中洲1之95號' ],
[120.25306,22.90632,'台南縣仁德鄉中洲村中洲1之96號' ],
[120.25452,22.97118,'台南縣仁德鄉中山路505號' ],
[120.25716,22.98849,'台南縣仁德鄉土庫村中正路三段583號' ],
[120.34143,23.23326,'台南縣六甲鄉水林村中山路446號' ],
[120.13412,23.24147,'台南縣北門鄉仁里村二重港108號' ],
[120.41927,23.05181,'台南縣左鎮鄉睦光村睦光5-2號' ],
[120.25490,23.04185,'台南縣永康市蔦松里中正北路348號' ],
[120.24778,23.04231,'台南縣永康市中正北路319號' ],
[120.48472,23.04139,'台南縣南化鄉南化村217號' ],
[120.36949,23.36076,'台南縣後壁鄉後壁村42號' ],
[120.31280,23.29211,'台南縣柳營鄉柳營路三段300號' ],
[120.15893,23.20396,'台南縣將軍鄉忠興村忠興162-1號' ],
[120.21517,23.19516,'台南縣麻豆鎮大山里大山腳67-25號' ],
[120.21861,23.18130,'台南縣麻豆鎮麻口里麻豆口118號' ],
[120.24744,23.18359,'台南縣麻豆鎮中山路13號' ],
[120.24445,23.16267,'台南縣麻豆鎮安東里安業275-6號' ],
[120.29275,23.13230,'台南縣善化鎮中山路368號' ],
[120.32555,23.13979,'台南縣善化鎮嘉北里茄拔2-30號' ],
[120.19078,22.99210,'台南市中西區府前路二段256號' ],
[120.17134,23.00045,'台南市中西區西賢里31鄰民權路四段730號' ],
[120.18702,22.98729,'台南市中西區中華西路二段2號' ],
[120.19343,23.00441,'台南市中西區文賢路229號' ],
[120.21486,23.01757,'台南市北區公園路721號' ],
[120.20950,22.99766,'台南市北區成功路16號' ],
[120.21500,23.00461,'台南市北區前鋒路283號' ],
[120.16666,22.98696,'台南市安平區育平路80號' ],
[120.18105,22.99007,'台南市安平區永華路二段216號' ],
[120.16005,22.99133,'台南市安平區永華路二段1255號' ],
[120.17420,22.98384,'台南市安平區健康路三段238號' ],
[120.17325,22.99697,'台南市安平區慶平路485號' ],
[120.19628,23.04281,'台南市安南區安中路一段650號' ],
[120.16027,23.05388,'台南市安南區安中路四段446號' ],
[120.41789,22.64233,'高雄縣大寮鄉義和村鳳屏二路297號' ],
[120.39469,22.60901,'高雄縣大寮鄉山頂村鳳林三路616號' ],
[120.66600,23.01087,'高雄縣大樹鄉欉腳村中興北路184號' ],
[120.43323,22.77242,'高雄縣大樹鄉統嶺村統嶺路125號之2' ],
[120.34423,22.70347,'高雄縣仁武鄉鳳仁路282號' ],
[120.45509,22.92105,'高雄縣內門鄉南屏路125號' ],
[120.63618,22.99124,'高雄縣六龜鄉光復路308號' ],
[120.25724,22.80823,'高雄縣永安鄉維新村維新路18-1號' ],
[120.24210,22.81438,'高雄縣永安鄉維新村保安路47號' ],
[120.58258,23.07813,'高雄縣甲仙鄉大田村新興路55號' ],
[120.53819,22.97041,'高雄縣杉林鄉月眉村清水路304號' ],
[120.29768,22.78236,'高雄縣岡山鎮岡山南路45號' ],
[120.31349,22.78612,'高雄縣岡山鎮介壽東路83號' ],
[120.40154,22.50063,'高雄縣林園鄉溪州村沿海路一段149號' ],
[120.38641,22.50017,'高雄縣林園鄉港埔村沿海路四段1號' ],
[120.39496,22.51167,'高雄縣林園鄉林園北路350號' ],
[120.32650,22.87373,'高雄縣阿蓮鄉阿蓮村中山路351號' ],
[120.55094,22.88538,'高雄縣美濃鎮和合里成功路133號' ],
[120.18402,22.90657,'高雄縣茄萣鄉白雲村白砂路6號' ],
[120.26250,22.76017,'高雄縣梓官鄉梓和村和平路317號' ],
[120.25351,22.72441,'高雄縣梓官鄉信蚵村通港路通港巷1號' ],
[120.25207,22.87842,'高雄縣湖內鄉大湖村中山路一段72號' ],
[120.24682,22.88390,'高雄縣湖內鄉大湖村中山路一段433號' ],
[120.22826,22.90710,'高雄縣湖內鄉公館村中山路二段61號' ],
[120.20772,22.90605,'高雄縣湖內鄉逸賢村湖中路685號' ],
[120.25661,22.86626,'高雄縣路竹鄉中山路589號' ],
[120.48221,22.88482,'高雄縣旗山鎮復新街17號' ],
[120.37856,22.62723,'高雄縣鳳山市中山東路10號' ],
[120.35465,22.61837,'高雄縣鳳山市五甲一路232號' ],
[120.36280,22.63739,'高雄縣鳳山市武松里鳳松路178-5號' ],
[120.30810,22.76254,'高雄縣橋頭鄉橋頭村成功北路15號' ],
[120.36284,22.78792,'高雄縣燕巢鄉南燕村中興路199號' ],
[120.23730,22.76437,'高雄縣彌陀鄉南寮村漁港路73號' ],
[120.32164,22.65730,'高雄市三民區鼎山街373號' ],
[120.31156,22.64255,'高雄市三民區山東街70號' ],
[120.33432,22.64066,'高雄市三民區覺民路362號' ],
[120.32468,22.65017,'高雄市三民區建工路566號' ],
[120.31055,22.63767,'高雄市三民區建國二路66號' ],
[120.34753,22.52333,'高雄市小港區鳳華路1號' ],
[120.37079,22.54331,'高雄市小港區沿海二路2號' ],
[120.34381,22.56820,'高雄市小港區大業北路４５號' ],
[120.28638,22.67115,'高雄市左營區中華一路2-11號' ],
[120.29574,22.63528,'高雄市前金區河南二路87號' ],
[120.29101,22.62748,'高雄市前金區中正四路２５１號' ],
[120.30119,22.62192,'高雄市前金區中山二路569號' ],
[120.29582,22.63072,'高雄市前金區中華三路136號' ],
[120.29418,22.62344,'高雄市前金區成功一路384號' ],
[120.30613,22.59151,'高雄市前鎮區擴建路1-1號' ],
[120.31862,22.57851,'高雄市前鎮區漁港路2號' ],
[120.31575,22.57642,'高雄市前鎮區新生路123號' ],
[120.29124,22.60136,'高雄市前鎮區加工區中四路3號' ],
[120.33665,22.60467,'高雄市前鎮區瑞福路2號' ],
[120.29126,22.60599,'高雄市前鎮區大華六街1號' ],
[120.31778,22.56844,'高雄市前鎮區漁港南一路19-1號' ],
[120.31341,22.60983,'高雄市前鎮區一心一路291號' ],
[120.30528,22.61434,'高雄市苓雅區三多三路264號' ],
[120.34275,22.62815,'高雄市苓雅區建國一路3號' ],
[120.32685,22.62138,'高雄市苓雅區三多二路80號' ],
[120.31143,22.61927,'高雄市苓雅區永定街93號' ],
[120.32998,22.63275,'高雄市苓雅區建國一路１４２號' ],
[120.31188,22.62306,'高雄市苓雅區民權一路105號' ],
[120.30571,22.62307,'高雄市新興區新田路82號' ],
[120.31702,22.63053,'高雄市新興區中正二路166號' ],
[120.31038,22.63060,'高雄市新興區中正三路9號' ],
[120.30319,22.71754,'高雄市楠梓區高雄市楠梓區左楠路2-1號' ],
[120.30153,22.72210,'高雄市楠梓區經五路125號' ],
[120.30975,22.71656,'高雄市楠梓區後昌路200號' ],
[120.32534,22.71949,'高雄市楠梓區高楠公路1376號' ],
[120.29290,22.70868,'高雄市楠梓區軍校路737號' ],
[120.27496,22.62202,'高雄市鼓山區捷興二街46號' ],
[120.27702,22.64785,'高雄市鼓山區鼓山三路5-1號' ],
[120.28510,22.59108,'高雄市旗津區中洲二路259號' ],
[120.28587,22.62057,'高雄市鹽埕區大義街56-1號' ],
[120.48866,22.72020,'屏東縣九如鄉東寧村九如路一段16號' ],
[120.63815,22.70428,'屏東縣內埔鄉水門村中山路1號' ],
[120.55773,22.62251,'屏東縣內埔鄉東寧村南寧路422號' ],
[120.53367,22.58365,'屏東縣竹田鄉泗州村連成路6-4號' ],
[120.49376,22.77174,'屏東縣里港鄉大平村中山南路25號' ],
[120.54453,22.41725,'屏東縣佳冬鄉六根村佳和路145號' ],
[120.68935,22.19939,'屏東縣枋山鄉楓港村舊庄路53號' ],
[120.59233,22.37080,'屏東縣枋寮鄉新龍村中山路319號' ],
[120.45524,22.47174,'屏東縣東港鎮興東里中正路一段85號' ],
[120.53839,22.69223,'屏東縣長治鄉崙上村中興路549號' ],
[120.53265,22.48837,'屏東縣南州鄉壽元村大同路107號' ],
[120.50159,22.48860,'屏東縣南州鄉七塊村三民路270號' ],
[120.47882,22.67142,'屏東縣屏東市民族路399-1號' ],
[120.48839,22.67969,'屏東縣屏東市忠孝路209-1號' ],
[120.50963,22.66105,'屏東縣屏東市民生路2-31號' ],
[120.49244,22.67360,'屏東縣屏東市民權路74號' ],
[120.49455,22.68560,'屏東縣屏東市中正路375號' ],
[120.46601,22.65562,'屏東縣屏東市前進里建國路410號' ],
[120.48790,22.66095,'屏東縣屏東市復興路261號' ],
[120.49460,22.65303,'屏東縣屏東市橋南里和生路一段560號' ],
[120.79278,21.94611,'屏東縣恆春鎮墾丁里墾丁路402號' ],
[120.74363,22.00887,'屏東縣恆春鎮網沙里省北路7號' ],
[120.52126,22.52160,'屏東縣崁頂鄉崁頂村中正路251號' ],
[120.37170,22.33225,'屏東縣琉球鄉大福村和平路3巷33-7號' ],
[120.59916,22.82301,'屏東縣高樹鄉長榮村興中路170號' ],
[120.54820,22.46978,'屏東縣新埤鄉新埤村新中路74號' ],
[120.46310,22.52401,'屏東縣新園鄉內庄村興安路54號' ],
[120.48871,22.59316,'屏東縣萬丹鄉萬丹路一段399號' ],
[120.56403,22.57024,'屏東縣萬巒鄉萬巒村中正路5-2號' ],
[120.81200,22.00532,'屏東縣滿州鄉永靖村新庄路150號' ],
[120.55538,22.54553,'屏東縣潮州鎮三星里潮州路730號' ],
[120.54015,22.55681,'屏東縣潮州鎮三和里延平路217號' ],
[120.53008,22.64735,'屏東縣麟洛鄉麟蹄村中山路64號' ],
[120.57038,22.75308,'屏東縣鹽埔鄉鹽中村勝利路25號' ],
[120.89491,22.34175,'台東縣大武鄉尚武村尚武路8號' ],
[121.00675,22.61264,'台東縣太麻里太麻里街13號' ],
[121.04229,22.70976,'台東縣台東市青海路四段270號' ],
[121.13809,22.76617,'台東縣台東市更生路653號' ],
[121.14807,22.75271,'台東縣台東市新生路136號' ],
[121.12872,22.73975,'台東縣台東市中華路二段732號' ],
[121.12642,22.77747,'台東縣台東市更生北路20號' ],
[121.37872,23.10220,'台東縣成功鎮中山路43號' ],
[121.21343,23.12125,'台東縣池上鄉福源村中山路85號' ],
[121.09241,22.85202,'台東縣卑南鄉明峰村13鄰忠孝路32號' ],
[121.08573,22.90234,'台東縣延平鄉桃源村昇平路1號' ],
[121.28695,23.00401,'台東縣東河鄉北源村柑桔林路37-3號' ],
[121.30272,22.96990,'台東縣東河鄉南東河5鄰46號' ],
[121.22927,22.87563,'台東縣東河鄉都蘭村都蘭路445-3號' ],
[121.45419,23.32211,'台東縣長濱鄉長濱村124號' ],
[121.13954,22.90107,'台東縣鹿野鄉鹿野村中華路2段169號' ],
[121.13889,22.98237,'台東縣鹿野鄉瑞豐村中山路123號' ],
[121.47477,22.66073,'台東縣綠島鄉南寮村漁港路７號' ],
[121.16253,23.04339,'台東縣關山鎮和平路24號' ],
[121.51987,22.05497,'台東縣蘭嶼鄉椰油村269號' ],
[121.31253,23.33337,'花蓮縣玉里鎮大同路219號' ],
[121.35629,23.38358,'花蓮縣玉里鎮觀音里高寮18-7號' ],
[121.42486,23.66791,'花蓮縣光復鄉中山路二段340號' ],
[121.42298,23.67354,'花蓮縣光復鄉林森路300號' ],
[121.58987,23.96396,'花蓮縣吉安鄉仁和村中正路二段6號' ],
[121.34274,24.18275,'花蓮縣秀林鄉富世村關原15號' ],
[121.74864,24.30732,'花蓮縣秀林鄉和平村和平路32-1號' ],
[121.49132,24.19383,'花蓮縣秀林鄉富世村154-1號' ],
[121.63123,23.99721,'花蓮縣花蓮市吉林路2號' ],
[121.59750,23.97445,'花蓮縣花蓮市中華路333-1號' ],
[121.59489,23.99592,'花蓮縣花蓮市中山路752號' ],
[121.30718,23.26970,'花蓮縣富里鄉東里村大莊路120號' ],
[121.25240,23.18277,'花蓮縣富里鄉石牌村中興路85號' ],
[121.60313,24.03856,'花蓮縣新城鄉北埔村北埔路368號' ],
[121.37698,23.49371,'花蓮縣瑞穗鄉瑞穗村中正南路105號' ],
[121.50894,23.86778,'花蓮縣壽豐鄉壽豐路一段1號' ],
[121.44640,23.74097,'花蓮縣鳳林鎮中正路一段371號' ],
[119.43534,23.20878,'澎湖縣七美鄉南滬村1-2號' ],
[119.56007,23.66052,'澎湖縣白沙鄉通梁村25-1號' ],
[119.51222,23.60171,'澎湖縣西嶼鄉池東村2-1號' ],
[119.48467,23.56832,'澎湖縣西嶼鄉外垵村89-2號' ],
[119.56844,23.56529,'澎湖縣馬公市民福路18號' ],
[119.50352,23.35805,'澎湖縣望安鄉東安村2-14號' ],
[119.50352,23.35805,'澎湖縣望安鄉東安村2-14號' ],
[119.61080,23.59468,'澎湖縣湖西鄉湖西村77-15號' ]];