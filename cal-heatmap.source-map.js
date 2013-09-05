{"version":3,"file":"cal-heatmap.min.js","sources":["cal-heatmap.js"],"names":["mergeRecursive","obj1","obj2","p","constructor","Object","e","CalHeatMap","_init","self","getDomain","options","start","map","d","getTime","_domains","set","getSubDomain","t","_domainType","subDomain","extractUnit","v","root","d3","select","itemSelector","append","attr","paintOnLoad","verticalDomainLabel","label","position","domainVerticalLabelHeight","height","Math","max","cellSize","domainHorizontalLabelWidth","domainLabelFormat","width","domainMargin","paint","nextSelector","on","itemNamespace","event","preventDefault","loadNextDomain","previousSelector","loadPreviousDomain","displayLegend","graphDim","domainGutter","cellPadding","afterLoad","loadOnInit","domains","keys","sort","getDatas","data","Date","parseInt","length","pop","fill","onComplete","w","outer","column","h","row","this","allowedDataType","range","cellRadius","domain","weekStartOnMonday","minDate","maxDate","dataType","considerMissingDataAsZero","verticalOrientation","domainDynamicDimension","align","offset","x","y","rotate","legend","legendCellSize","legendCellPadding","legendMargin","legendVerticalPosition","legendHorizontalPosition","highlight","itemName","subDomainTitleFormat","empty","filled","subDomainDateFormat","subDomainTextFormat","legendTitleFormat","lower","inner","upper","animationDuration","onClick","afterLoadNextDomain","afterLoadPreviousDomain","afterLoadData","onMaxDomainReached","onMinDomainReached","min","name","level","floor","getMinutes","format","date","connector","dt","getFullYear","getMonth","getDate","getHours","hour","getEndOfMonth","getWeekDay","day","getWeekNumber","week","weekDay","getDay","setDate","month","year","type","x_day","svg","_completed","NAVIGATE_LEFT","NAVIGATE_RIGHT","RESET_ALL_ON_UPDATE","RESET_SINGLE_ON_UPDATE","APPEND_ON_UPDATE","_maxDomainReached","_minDomainReached","domainPosition","DomainPosition","navigationDir","getDomainPosition","domainIndex","axis","domainDim","tmp","setPosition","enteringDomainDim","exitingDomainDim","getPositionFromIndex","shiftRightBy","getLast","shiftLeftBy","domainRotate","selection","s","domainSvg","selectAll","enter","classname","subDomainSvgGroup","rect","get","getHighlightClassName","positionSubDomainX","positionSubDomainY","call","text","formatDate","transition","duration","getPosition","tempWidth","tempHeight","exit","remove","htmlClass","value","count","formatNumber","init","settings","validateSelector","selector","Element","hasOwnProperty","substring","console","log","indexOf","Array","isArray","splice","k","i","push","prototype","triggerEvent","eventName","successArgs","skip","arguments","apply","itemNb","response","parent","shift","reached","f","time","nextDomainStartTimestamp","getNextDomain","maxDomainIsReached","minDomainIsReached","previousDomainStartTimestamp","getPreviousDomain","datetimestamp","insert","legendWidth","legendItem","delay","down","up","index","dateIsEqual","isNow","date_a","date_b","getDayOfYear","getWeekDomain","weekStart","endDate","stop","mondays","sundays","getYearDomain","years","getMinuteDomain","minutes","getHourDomain","hours","getDayDomain","days","getMonthDomain","setMonth","months","computeDaySubDomainSize","lastDayOfMonth","computeMinSubDomainSize","computeHourSubDomainSize","endOfMonth","computeWeekSubDomainSize","endWeekNb","startWeekNb","n","isNaN","total","source","startDate","callback","updateMode","_callback","parseDatas","json","parseURI","csv","tsv","forEach","key","element","array","domainKeys","subDomainStep","domainUnit","has","subDomainUnit","subDomainsData","str","replace","toISOString","next","previous","update","dataSource","getSVG","styles",".graph",".graph-rect","rect.highlight","rect.now","text.highlight","text.now",".domain-background",".graph-label",".subdomain-text",".qi","j","whitelistStyles","filterStyles","attribute","property","getElement","dom","window","cs","getComputedStyle","item","getPropertyValue","css","currentStyle","string","style","l","XMLSerializer","serializeToString","positions","dim","String","formatted","prop","regexp","RegExp","define","amd"],"mappings":"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"}