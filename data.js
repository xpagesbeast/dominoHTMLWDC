{
    domain:"thoth1.canalbarge.com",
    httsp:true,
    params:[
        {count:500000}
    ],
    services:[
        {
            id:"vessel-register-barges",
            name:"Barge Vessel Register",
            description:"Lists all Barges CBC interacts with.",
            href:"operations/vesselre.nsf/api/data/collections/name/vwBargesJSON",
            tableau-cols:[
                {id:"@entryid",alias:"id", dataType:"tableau.dataTypeEnum.string"}
                {id:"@unid",alias:"unid", dataType:"tableau.dataTypeEnum.string"},
                {id:"@form",alias:"Form", dataType:"tableau.dataTypeEnum.string"},
                {id:"BargeName",alias:"Name",dataType:"tableau.dataTypeEnum.string"},
                {id:"OfficialNumber",alias:"Official Number",dataType:"tableau.dataTypeEnum.string"},
                {id:"BargeService",alias:"Barge Service",dataType:"tableau.dataTypeEnum.string"},
                {id:"BargeEx",alias:"Barge Ex", dataType:"tableau.dataTypeEnum.string"},
                {id:"BargeType",alias:"Barge Type", dataType:"tableau.dataTypeEnum.string"},
                {id:"Capacity",alias:"Capacity", dataType:"tableau.dataTypeEnum.string"},
                {id:"DateBuilt",alias:"Date Built", dataType:"tableau.dataTypeEnum.date}"},
                {id:"Depth",alias:"Depth", dataType:"tableau.dataTypeEnum.int"},
                {id:"BuiltBy",alias:"Built By", dataType:"tableau.dataTypeEnum.string"},
                {id:"FiveYearForecastFlag",alias:"Participates In Five Year Forecast", dataType:"tableau.dataTypeEnum.string"},
                {id:"UserFeeID",alias:"User Fee ID", dataType:"tableau.dataTypeEnum.string"},
                {id:"ForSale",alias:"For Sale", dataType:"tableau.dataTypeEnum.string"},
                {id:"ForSaleDate",alias:"For Sale Date", dataType:"tableau.dataTypeEnum.string"},
                {id:"FuelTankCapacity",alias:"Fuel Tank Capacity", dataType:"tableau.dataTypeEnum.string"},
                {id:"Gaugingtype",alias:"Gauging Type", dataType:"tableau.dataTypeEnum.string"},
                {id:"YearBuilt",alias:"Year Built", dataType:"tableau.dataTypeEnum.int"},
                {id:"HullNumber",alias:"Hull Number", dataType:"tableau.dataTypeEnum.string"},
                {id:"HullType",alias:"Hull Type", dataType:"tableau.dataTypeEnum.string"},
                {id:"HullForm",alias:"Hull Form", dataType:"tableau.dataTypeEnum.string"},
                {id:"InsuredValue",alias:"Insured Value", dataType:"tableau.dataTypeEnum.int"},
                {id:"Length",alias:"Length", dataType:"tableau.dataTypeEnum.int"},
                {id:"Width",alias:"Width", dataType:"tableau.dataTypeEnum.int"},
                {id:"NetTonnage",alias:"New Tonnage", dataType:"tableau.dataTypeEnum.string"},
                {id:"OwnedManaged",alias:"Owned By", dataType:"tableau.dataTypeEnum.string"},
                {id:"Partnership",alias:"Partnership", dataType:"tableau.dataTypeEnum.string"},
                {id:"PROJECTEDRETIREDATE",alias:"Projected Retire Date", dataType:"tableau.dataTypeEnum.string"},
                {id:"ProjectedSellYear",alias:"Projected Sell Year", dataType:"tableau.dataTypeEnum.string"},
                {id:"PumpEngine",alias:"Pump Engine", dataType:"tableau.dataTypeEnum.string"},
                {id:"PumpEngineHours",alias:"Pump Engine Hours", dataType:"tableau.dataTypeEnum.string"},
                {id:"PumpEngineHoursCalcDate",alias:"Pump Engine Hours Date", dataType:"tableau.dataTypeEnum.string"},
                {id:"PumpEngineLastOverhaul",alias:"Pump engine Last Overhaul", dataType:"tableau.dataTypeEnum.string"},
                {id:"Route",alias:"Route", dataType:"tableau.dataTypeEnum.string"},
                {id:"RakeSize",alias:"Rake Size", dataType:"tableau.dataTypeEnum.string"},
                {id:"Registry",alias:"Registry", dataType:"tableau.dataTypeEnum.string"},
                {id:"SINEXPEO",alias:"Sinex PEO", dataType:"tableau.dataTypeEnum.string"},
                {id:"Sold",alias:"Sold", dataType:"tableau.dataTypeEnum.string"},
                {id:"Status",alias:"Status", dataType:"tableau.dataTypeEnum.string"},
                {id:"ShortTon",alias:"Short Tons", dataType:"tableau.dataTypeEnum.string"},
                {id:"MaxBarrels",alias:"Max Barrels", dataType:"tableau.dataTypeEnum.int"},
                {id:"PV_PRESSURE",alias:"PV Pressure", dataType:"tableau.dataTypeEnum.string"},
                {id:"Lining",alias:"Lining", dataType:"tableau.dataTypeEnum.string"},
                {id:"VaporTypeFlat",alias:"Vapor Type Flat", dataType:"tableau.dataTypeEnum.string"},
                {id:"VaporSpaceCoating",alias:"Vapor Space Coating", dataType:"tableau.dataTypeEnum.string"},
                {id:"MajorRecon",alias:"Major Reconstruction", dataType:"tableau.dataTypeEnum.string"},
                {id:"VGPTrack",alias:"Participates in VGP", dataType:"tableau.dataTypeEnum.string"},
                {id:"OWNIDE",alias:"Trak Owner ID", dataType:"tableau.dataTypeEnum.string"},
                {id:"BARNBR",alias:"Trak Number", dataType:"tableau.dataTypeEnum.string"},
                {id:"GreenBookFlag",alias:"Participates in Greenbook", dataType:"tableau.dataTypeEnum.string"}
            ]
        },
        {
            id:"vessel-register-boats",
            name:"Boat Vessel Register",
            description:"Lists all Boats CBC interacts with.",
            href:"operations/vesselre.nsf/api/data/collections/name/vwBoatsJSON",
            tableau-cols:[
                {id:"@entryid",alias:"id", dataType:"tableau.dataTypeEnum.string"}
                {id:"@unid",alias:"unid", dataType:"tableau.dataTypeEnum.string"},
                {id:"@form",alias:"Form", dataType:"tableau.dataTypeEnum.string"},
                {id:"BoatName",alias:"Name", dataType:"tableau.dataTypeEnum.string"},
                {id:"officialNumber",alias:"Official Number", dataType:"tableau.dataTypeEnum.string"},
                {id:"TrakAbr",alias:"Trak Abbreviation", dataType:"tableau.dataTypeEnum.string"},
                {id:"CallSign",alias:"Call Sign", dataType:"tableau.dataTypeEnum.string"},
                {id:"VESSEL_CLASS",alias:"Vessel Class", dataType:"tableau.dataTypeEnum.string"},
                {id:"GrossTonnage",alias:"Gross Tonnage", dataType:"tableau.dataTypeEnum.string"},
                {id:"Horsepower",alias:"Horsepower", dataType:"tableau.dataTypeEnum.int"},
                {id:"RPM",alias:"RPM", dataType:"tableau.dataTypeEnum.int"},
                {id:"Width",alias:"Width", dataType:"tableau.dataTypeEnum.int"},
                {id:"Depth",alias:"Depth", dataType:"tableau.dataTypeEnum.int"},
                {id:"YearBuilt",alias:"Year Built", dataType:"tableau.dataTypeEnum.int"},
                {id:"Shipyard",alias:"Shipyard", dataType:"tableau.dataTypeEnum.string"},
                {id:"EyeLevel",alias:"Eye Level", dataType:"tableau.dataTypeEnum.int"},
                {id:"MainEngine",alias:"Main Engine", dataType:"tableau.dataTypeEnum.string"},
                {id:"EngPCAssetTag",alias:"Engine PC Asset Tag", dataType:"tableau.dataTypeEnum.string"},
                {id:"EngMonitorSerial",alias:"Engine Monitor Serial", dataType:"tableau.dataTypeEnum.string"},
                {id:"InsuredValue",alias:"Insured Value", dataType:"tableau.dataTypeEnum.int"},
                {id:"FuelCapacity",alias:"Full Capacity", dataType:"tableau.dataTypeEnum.int"},
                {id:"Owner",alias:"Owned By", dataType:"tableau.dataTypeEnum.string"},
                {id:"Material",alias:"Material", dataType:"tableau.dataTypeEnum.string"},
                {id:"Length",alias:"Length", dataType:"tableau.dataTypeEnum.int"},
                {id:"Age",alias:"Age", dataType:"tableau.dataTypeEnum.int"},
                {id:"CharterHire",alias:"Chartered", dataType:"tableau.dataTypeEnum.int"},
                {id:"Status",alias:"Status", dataType:"tableau.dataTypeEnum.string"}
            ]
        },
        {
            id:"vessel-register-special-features",
            name:"Barge Vessel Special Features",
            description:"List of special features on Barges",
            href:"operations/vesselre.nsf/api/data/collections/name/vwSpecialFeatures",
            tableau-cols:[
                {id:"@entryid",alias:"id", dataType:"tableau.dataTypeEnum.string"}
                {id:"@unid",alias:"unid", dataType:"tableau.dataTypeEnum.string"},
                {id:"@form",alias:"Form", dataType:"tableau.dataTypeEnum.string"},
                {id:"BargeName",alias:"Barge Name", dataType:"tableau.dataTypeEnum.string"},
                {id:"SpecialFeatures",alias:"Special Features", dataType:"tableau.dataTypeEnum.string"},
                {id:"OfficialNumber",alias:"Official Number", dataType:"tableau.dataTypeEnum.string"}
            ]
        },
        {
            id:"marine-near-miss",
            name:"Marine Near Miss",
            description:"List of Near Miss documents",
            href:"operations/nearmiss.nsf/api/data/collections/name/vwExport",
            tableau-cols:[
                {id:"@entryid",alias:"id", dataType:"tableau.dataTypeEnum.string"},
                {id:"@unid",alias:"unid", dataType:"tableau.dataTypeEnum.string"},
                {id:"@form",alias:"form", dataType:"tableau.dataTypeEnum.string"},
                {id:"INCIDENT_DATE",alias:"INCIDENT_DATE", dataType:"tableau.dataTypeEnum.string"},
                {id:"INCIDENT_DATE_SHORT",alias:"INCIDENT_DATE_SHORT", dataType:"tableau.dataTypeEnum.string"},
                {id:"INCIDENT_TIME",alias:"INCIDENT_TIME", dataType:"tableau.dataTypeEnum.string"},
                {id:"INCIDENT_TIME_SHORT",alias:"INCIDENT_TIME_SHORT", dataType:"tableau.dataTypeEnum.string"},
                {id:"DATE_SUBMITTED",alias:"DATE_SUBMITTED", dataType:"tableau.dataTypeEnum.string"},
                {id:"DATE_SUBMITTED_SHORT",alias:"DATE_SUBMITTED_SHORT", dataType:"tableau.dataTypeEnum.string"},
                {id:"VESSEL_NAME",alias:"VESSEL_NAME", dataType:"tableau.dataTypeEnum.string"},
                {id:"BargeList",alias:"BargeList", dataType:"tableau.dataTypeEnum.string"},
                {id:"BARGES_IN_TOW",alias:"BARGES_IN_TOW", dataType:"tableau.dataTypeEnum.string"},
                {id:"CAPTAIN",alias:"CAPTAIN", dataType:"tableau.dataTypeEnum.string"},
                {id:"CREW_LIST",alias:"CREW_LIST", dataType:"tableau.dataTypeEnum.string"},
                {id:"NEARMISS_DOC_VERSION",alias:"NEARMISS_DOC_VERSION", dataType:"tableau.dataTypeEnum.string"},
                {id:"INCIDENT_ACTIVITY",alias:"INCIDENT_ACTIVITY", dataType:"tableau.dataTypeEnum.string"},
                {id:"OTHER_INCIDENT_ACTIVITY",alias:"OTHER_INCIDENT_ACTIVITY", dataType:"tableau.dataTypeEnum.string"},
                {id:"INCIDENT_NEARLY_OCCURED",alias:"INCIDENT_NEARLY_OCCURED", dataType:"tableau.dataTypeEnum.string"},
                {id:"INCIDENT_AREA",alias:"INCIDENT_AREA", dataType:"tableau.dataTypeEnum.string"},
                {id:"OTHER_INCIDENT_AREA",alias:"OTHER_INCIDENT_AREA", dataType:"tableau.dataTypeEnum.string"},
                {id:"INCIDENT_LIKELY_CAUSE",alias:"INCIDENT_LIKELY_CAUSE", dataType:"tableau.dataTypeEnum.string"},
                {id:"OTHER_INCIDENT_LIKELY_CAUSE",alias:"OTHER_INCIDENT_LIKELY_CAUSE", dataType:"tableau.dataTypeEnum.string"},
                {id:"INCIDENT_ON_BOARD_ACTION",alias:"INCIDENT_ON_BOARD_ACTION", dataType:"tableau.dataTypeEnum.string"},
                {id:"OTHER_INCIDENT_POSSIBLE_CONSEQUENCE",alias:"OTHER_INCIDENT_POSSIBLE_CONSEQUENCE", dataType:"tableau.dataTypeEnum.string"},
                {id:"INCIDENT_POSSIBLE_CONSEQUENCE",alias:"INCIDENT_POSSIBLE_CONSEQUENCE", dataType:"tableau.dataTypeEnum.string"},
                {id:"INCIDENT_LIKELYHOOD",alias:"INCIDENT_LIKELYHOOD", dataType:"tableau.dataTypeEnum.string"},
                {id:"INCIDENT_IMPACT",alias:"INCIDENT_IMPACT", dataType:"tableau.dataTypeEnum.string"},
                {id:"RIVER",alias:"RIVER", dataType:"tableau.dataTypeEnum.string"},
                {id:"LOCATION",alias:"LOCATION", dataType:"tableau.dataTypeEnum.string"},
                {id:"MIP",alias:"MIP", dataType:"tableau.dataTypeEnum.string"},
                {id:"POSITION_OF_PERSON_INVOLVED",alias:"POSITION_OF_PERSON_INVOLVED", dataType:"tableau.dataTypeEnum.string"},
                {id:"PERSON_SUBMITTING_NEARMISS",alias:"PERSON_SUBMITTING_NEARMISS", dataType:"tableau.dataTypeEnum.string"},
                {id:"STATUS",alias:"STATUS", dataType:"tableau.dataTypeEnum.string"},
                {id:"TEMPERATURE",alias:"TEMPERATURE", dataType:"tableau.dataTypeEnum.string"},
                {id:"PRECIPITATION",alias:"PRECIPITATION", dataType:"tableau.dataTypeEnum.string"},
                {id:"TIME_OF_DAY",alias:"TIME_OF_DAY", dataType:"tableau.dataTypeEnum.string"},
                {id:"Wind",alias:"Wind", dataType:"tableau.dataTypeEnum.string"},
                {id:"VESSLE_OTHER",alias:"VESSLE_OTHER", dataType:"tableau.dataTypeEnum.string"},
                {id:"DESCRIPTION_PREVENTIVE_ACTION",alias:"DESCRIPTION_PREVENTIVE_ACTION", dataType:"tableau.dataTypeEnum.string"},
                {id:"IncidentFactors01",alias:"IncidentFactors01", dataType:"tableau.dataTypeEnum.string"},
                {id:"SHORE_IS_LIKELY_NEARMISS",alias:"SHORE_IS_LIKELY_NEARMISS", dataType:"tableau.dataTypeEnum.string"},
                {id:"SHORE_FACTS_SUPPORT_HLV",alias:"SHORE_FACTS_SUPPORT_HLV", dataType:"tableau.dataTypeEnum.string"},
                {id:"SHORE_NEED_ROOT_ANALYSIS",alias:"SHORE_NEED_ROOT_ANALYSIS", dataType:"tableau.dataTypeEnum.string"},
                {id:"SHORE_SIMILAR_HLVS_EXIST",alias:"SHORE_SIMILAR_HLVS_EXIST", dataType:"tableau.dataTypeEnum.string"},
                {id:"SHORE_IS_CAPA",alias:"SHORE_IS_CAPA", dataType:"tableau.dataTypeEnum.string"},
                {id:"UNID",alias:"UNID", dataType:"tableau.dataTypeEnum.string"},
                {id:"Pilot",alias:"Pilot", dataType:"tableau.dataTypeEnum.string"},
                {id:"Record_ID",alias:"Record_ID", dataType:"tableau.dataTypeEnum.string"},
                {id:"CreatedBy",alias:"CreatedBy", dataType:"tableau.dataTypeEnum.string"},
                {id:"submittype",alias:"submittype", dataType:"tableau.dataTypeEnum.string"}
            ]
        }
    ]
}