window.ZHONGSHAN_DATA = {
  categories: [
    { id: 'transport', label: '交通' },
    { id: 'culture', label: '景點／文化' },
    { id: 'food', label: '餐飲' },
    { id: 'check', label: '購買／行前核對' }
  ],
  intro: {
    title: '中山旅遊資訊｜候選與出發前核對',
    description: '這是一份依公開來源整理的候選資料與核對項目，不是個人化行程、訂位資訊或即時營運保證。請依自己的安排自行判斷；會變動的資訊，請在出發前向當期官方頁面、承運者或店家確認。',
    sourceNote: '官方或營運者來源用於其頁面明示的靜態資訊與規則。平台與媒體來源僅作候選線索，不能替代當期官方或店家確認。每筆來源均標示台北查詢日。'
  },
  background: {
    text: '中山位於廣東珠江口西岸，舊稱香山；孫中山故居、石岐的商業文化與騎樓街景，是理解城市脈絡的公開資料線索。此段僅作文化背景，不表示任何地點當日開放或適合進入。',
    sources: [
      { label: '中山市政府：中山文化場館資料', url: 'https://www.zs.gov.cn/zjzs/lygg/zssj/content/post_2399556.html', checked: '2026-10-18' },
      { label: '中山市政府：中山景區資料', url: 'https://www.zs.gov.cn/zjzs/lygg/zssj/content/post_2399653.html', checked: '2026-10-18' }
    ]
  },
  items: [
    {category:'transport',name:'香港國際機場—中山跨境巴士',status:'候選｜待確認',scope:'香港國際機場「Mainland coaches」頁面提供往返中國大陸的跨境巴士資訊與查詢入口；可作為查詢中山跨境巴士的起點。不引述特定業者、班次、票價、行李規則或下車點。',confirm:'指定日期的承運者、班次、購票與登車規則、行李安排、通關要求、下車點及臨時公告。',sources:[['香港國際機場：Mainland coaches','https://www.hongkongairport.com/en/transport/mainland-connection/mainland-coaches/','2026-10-18']]},
    {category:'transport',name:'香港西九龍站高速鐵路目的地查詢',status:'候選｜待確認',scope:'港鐵高速鐵路目的地頁提供目的地與票務查詢入口；可作為查詢相關鐵路路段的起點。不引述指定日期的直達性、轉乘方式、車次、票價或座位。',confirm:'指定日期的實際路線、各段班次、轉乘安排、票務規則、行李規則、車站服務與臨時公告。',sources:[['港鐵高速鐵路：Destination','https://www.highspeed.mtr.com.hk/en/ticket/destination.html','2026-10-18']]},
    {category:'transport',name:'港珠澳大橋穿梭巴士資訊',status:'候選｜待確認',scope:'港珠澳大橋穿梭巴士官方頁提供服務與票務資訊入口；可作為涉及該服務時的查詢起點。不引述其可銜接中山、班次、票價、通關時間或轉乘結果。',confirm:'指定日期服務範圍、班次、票務、通關、後續交通、行李規則與臨時公告。',sources:[['港珠澳大橋穿梭巴士','https://www.hzmbus.com/message.html?tab=1','2026-10-18']]},
    {category:'transport',name:'香港機場 SkyPier 渡輪轉乘規則',status:'出發前確認',scope:'香港國際機場 SkyPier ferry transfer 頁面說明渡輪轉乘服務規則；僅可用於確認自己是否符合該服務的當期條件。',confirm:'入境與行李狀態是否符合服務條件、目的地、時段、行李規則與臨時公告。',sources:[['香港國際機場：SkyPier ferry transfer','https://www.hongkongairport.com/en/transport/mainland-connection/ferry-transfer.page','2026-10-18']]},
    {category:'culture',name:'孫中山故居紀念館',status:'靜態背景｜可引用；出發前確認',scope:'官方頁明示此場館及其所在資訊；可作為孫中山與近代史的文化背景線索。不引述當日開放、入場、預約、安檢、動線或設施條件。',confirm:'指定日期的開放、最後入場、預約、入館規則、臨時公告、入口與現場服務資訊。',sources:[['中山市南朗街道：孫中山故居紀念館','https://www.zs.gov.cn/nlz/zjnl/nlgk/lyjd/content/post_2438611.html','2026-10-18']]},
    {category:'culture',name:'中山市博物館',status:'靜態背景｜可引用；出發前確認',scope:'官方文化場館資料列有中山市博物館；可作為認識中山歷史、華僑與城市記憶的查詢線索。不引述當日展覽、開館、入館、設施或人流。',confirm:'指定日期的開放、特展、入館規則、預約、臨時公告、入口與現場服務資訊。',sources:[['中山市政府：中山文化場館資料','https://www.zs.gov.cn/zjzs/lygg/zssj/content/post_2399556.html','2026-10-18']]},
    {category:'culture',name:'香山商業文化博物館',status:'靜態背景｜可引用；出發前確認',scope:'官方文化場館資料列有香山商業文化博物館；可作為查詢香山商業文化的線索。不引述當日開放、展覽、入口或設施。',confirm:'指定日期的開放、展覽、入館規則、預約、臨時公告、入口與現場服務資訊。',sources:[['中山市政府：中山文化場館資料','https://www.zs.gov.cn/zjzs/lygg/zssj/content/post_2399556.html','2026-10-18']]},
    {category:'culture',name:'孫文西路文化旅遊步行街',status:'候選｜待確認',scope:'官方景區資料可作為石岐老城、騎樓街景與傳統商業文化的背景線索。不引述路段狀態、店家、步行條件、人流、交通或可近用性。',confirm:'指定日期的臨時公告、現場出入口、交通管制、周邊店家及其他現場條件。',sources:[['中山市政府：中山景區資料','https://www.zs.gov.cn/zjzs/lygg/zssj/content/post_2399653.html','2026-10-18']]},
    {category:'culture',name:'興中廣場／岐江河畔商業區',status:'候選｜待確認',scope:'官方景區資料可作為岐江河畔城市空間與商業區的查詢線索。不引述商場、餐飲、河畔或設施的當日可用性與條件。',confirm:'指定日期的營運、現場公告、交通、出入口及自行需要的服務資訊。',sources:[['中山市政府：中山景區資料','https://www.zs.gov.cn/zjzs/lygg/zssj/content/post_2399653.html','2026-10-18']]},
    {category:'food',name:'石岐佬中山菜館（張溪店）',status:'候選｜待確認',scope:'Trip.com 與 OpenRice 頁面提供同名店家候選線索；不得把平台資料引述為當前地址、營業、訂位、菜單、座位、支付或服務條件。',confirm:'店家當期官方聯絡方式、營業、訂位或候位、當日菜單與供應、支付、現場規則與交通資訊。',sources:[['Trip.com','https://hk.trip.com/restaurant/china/zhongshan/detail/shi-qi-lao-zhongshan-cuisine-restaurant-171297/','2026-10-18'],['OpenRice','https://www.openrice.com.cn/zh/zhongshan/r-%E7%9F%B3%E5%B2%90%E4%BD%AC-%E5%B3%B0%E8%8F%AF28%E5%BB%A3%E5%A0%B4-%E7%B2%B5%E8%8F%9C-%E5%BB%A3%E6%9D%B1-%E6%B5%B7%E9%AE%AE-r2700860','2026-10-18']]},
    {category:'food',name:'鴿鳥軒（石岐店）',status:'候選｜待確認',scope:'攜程頁面提供同名店家候選線索；不得把平台資料引述為當前地址、營業、訂位、菜單、座位、支付或服務條件。',confirm:'店家當期官方聯絡方式、營業、訂位或候位、當日菜單與供應、支付、現場規則與交通資訊。',sources:[['攜程','https://you.ctrip.com/food/zhongshan233/120704.html','2026-10-18']]},
    {category:'food',name:'石岐鴿師傅餐廳（石岐總店）',status:'候選｜待確認',scope:'攜程頁面提供同名店家候選線索；不得把平台資料引述為當前地址、營業、訂位、菜單、座位、支付或服務條件。',confirm:'店家當期官方聯絡方式、營業、訂位或候位、當日菜單與供應、支付、現場規則與交通資訊。',sources:[['攜程','https://you.ctrip.com/food/zhongshan233/7552115-dianping.html','2026-10-18']]},
    {category:'food',name:'海港城海鮮大酒樓（東區店）',status:'候選｜待確認',scope:'永安旅遊頁面提供同名店家候選線索；不得把平台資料引述為當前地址、營業、訂位、菜單、座位、支付或服務條件。',confirm:'店家當期官方聯絡方式、營業、訂位或候位、當日菜單與供應、支付、現場規則與交通資訊。',sources:[['永安旅遊','https://www.wingontravel.com/discovery/restaurant-170254','2026-10-18']]},
    {category:'food',name:'銘珠三鄉瀨粉',status:'候選｜待確認',scope:'南方+文章提供三鄉瀨粉與同名店家的飲食線索；不得把媒體資料引述為當前地址、營業、菜單、訂位或服務條件。',confirm:'店家當期官方聯絡方式、營業、訂位或候位、當日菜單與供應、支付、現場規則與交通資訊。',sources:[['南方+','https://static.nfnews.com/content/202311/16/c8306865.html','2026-10-18']]},
    {category:'food',name:'孫奇珍茶樓',status:'候選｜待確認',scope:'搜狐文章提供同名店家候選線索；不得把媒體資料引述為當前地址、營業、訂位、菜單、座位、支付或服務條件。',confirm:'店家當期官方聯絡方式、營業、訂位或候位、當日菜單與供應、支付、現場規則與交通資訊。',sources:[['搜狐','https://www.sohu.com/a/940659631_121106875','2026-10-18']]},
    {category:'food',name:'南成行',status:'候選｜待確認',scope:'搜狐文章提供同名店家候選線索；不得把媒體資料引述為當前地址、營業、訂位、菜單、座位、支付或服務條件。',confirm:'店家當期官方聯絡方式、營業、訂位或候位、當日菜單與供應、支付、現場規則與交通資訊。',sources:[['搜狐','https://www.sohu.com/a/940659631_121106875','2026-10-18']]},
    {category:'food',name:'喜珍軒',status:'候選｜待確認',scope:'Trip.com 頁面提供同名店家候選線索；不得把平台資料引述為當前地址、營業、訂位、菜單、座位、支付或服務條件。',confirm:'店家當期官方聯絡方式、營業、訂位或候位、當日菜單與供應、支付、現場規則與交通資訊。',sources:[['Trip.com','https://hk.trip.com/restaurant/china/zhongshan/detail/yue-restaurant-32515020','2026-10-18']]},
    {category:'food',name:'振興燒臘（悅秀分店）',status:'候選｜待確認',scope:'Trip.com 頁面提供同名店家候選線索；不得把平台資料引述為當前地址、營業、訂位、菜單、座位、支付或服務條件。',confirm:'店家當期官方聯絡方式、營業、訂位或候位、當日菜單與供應、支付、現場規則與交通資訊。',sources:[['Trip.com','https://tw.trip.com/restaurant/china/zhongshan/detail/restaurant-127768576/','2026-10-18']]},
    {category:'food',name:'COMMUNE（興中廣場店）',status:'候選｜待確認',scope:'永安旅遊頁面提供同名店家候選線索；不得把平台資料引述為當前地址、營業、訂位、菜單、座位、支付或服務條件。',confirm:'店家當期官方聯絡方式、營業、訂位或候位、當日菜單與供應、支付、現場規則與交通資訊。',sources:[['永安旅遊','https://www.wingontravel.com/discovery/restaurant-45567645','2026-10-18']]},
    {category:'food',name:'Italy Square',status:'候選｜待確認',scope:'TripAdvisor 頁面提供同名店家候選線索；不得把平台資料引述為當前地址、營業、訂位、菜單、座位、支付或服務條件。',confirm:'店家當期官方聯絡方式、營業、訂位或候位、當日菜單與供應、支付、現場規則與交通資訊。',sources:[['TripAdvisor','https://www.tripadvisor.com.hk/Restaurant_Review-g297417-d2666430-Reviews-Italy_Square-Zhongshan_Guangdong.html','2026-10-18']]},
    {category:'food',name:'荷房餐廳、金閣佬、惹味居',status:'候選｜待確認',scope:'中山市商務局文章列出地方菜與店家線索；不得把該文引述為店家當前地址、營業、訂位、菜單、座位、支付或服務條件。',confirm:'各店當期官方聯絡方式、營業、訂位或候位、當日菜單與供應、支付、現場規則與交通資訊。',sources:[['中山市商務局','https://www.zs.gov.cn/swj/zwdt/content/post_2337131.html','2026-10-18']]},
    {category:'check',name:'交通選定後核對',status:'出發前確認',scope:'此為使用既有交通官方來源前的核對欄位，不是任何交通安排或購買指示。',confirm:'指定日期的服務範圍、班次、票價、購票規則、行李、通關、下車點及臨時公告。',sources:[['香港國際機場：Mainland coaches','https://www.hongkongairport.com/en/transport/mainland-connection/mainland-coaches/','2026-10-18'],['港鐵高速鐵路：Destination','https://www.highspeed.mtr.com.hk/en/ticket/destination.html','2026-10-18'],['港珠澳大橋穿梭巴士','https://www.hzmbus.com/message.html?tab=1','2026-10-18']]},
    {category:'check',name:'場館選定後核對',status:'出發前確認',scope:'此為使用既有場館官方來源前的核對欄位，不表示任何場館當日開放或可使用。',confirm:'開放、最後入場、預約、入館規則、臨時公告、入口及自行需要的現場服務資訊。',sources:[['中山市南朗街道：孫中山故居紀念館','https://www.zs.gov.cn/nlz/zjnl/nlgk/lyjd/content/post_2438611.html','2026-10-18'],['中山市政府：中山文化場館資料','https://www.zs.gov.cn/zjzs/lygg/zssj/content/post_2399556.html','2026-10-18']]},
    {category:'check',name:'餐飲選定後核對',status:'出發前確認',scope:'此為使用既有餐飲候選線索前的核對欄位，不表示任何店家當日營業、供應或可訂位。',confirm:'店家當期官方聯絡方式、營業、訂位或候位、當日菜單與供應、支付、現場規則與交通資訊。',sources:[['中山市商務局','https://www.zs.gov.cn/swj/zwdt/content/post_2337131.html','2026-10-18']]},
    {category:'check',name:'個人資料與付款安全',status:'出發前確認',scope:'本頁的使用規則；不蒐集、不保存證件號碼、付款資料、帳號或密碼。',confirm:'如需向官方、承運者或店家查詢，請只在對方正式流程中自行處理必要資料。',sources:[['本頁資料治理規則（無外部資料來源）','#data-governance','2026-10-22']]}
  ],
  checklist: [
    '交通：服務範圍、班次、票價、購票規則、行李、通關與臨時公告',
    '場館：開放、最後入場、預約、入館規則、入口與臨時公告',
    '餐飲：官方聯絡方式、營業、候位或訂位、當日供應、支付與現場規則',
    '資料安全：僅在官方、承運者或店家的正式流程中自行處理必要資料'
  ]
};
