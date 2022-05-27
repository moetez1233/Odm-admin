export class URLS{
    static serverPath=" http://localhost:9098";
    static logIn=URLS.serverPath+"/login";
    static AddUser=URLS.serverPath+"/api/users/save"
    static ListUser=URLS.serverPath+"/api/users"
    static UserProfile=URLS.serverPath+"/api/users/Profile"
    static SearchUser=URLS.serverPath+"/api/users/searchUser"
    static Delet=URLS.serverPath+"/api/users/delete"
    static Update=URLS.serverPath+"/api/users/update"
    /* ===================== SF ==================== */
    static UploadSf=URLS.serverPath+"/api/users/uploadSf"
    static GetAllSF=URLS.serverPath+"/api/users/getListSf"
    static GetSfByName=URLS.serverPath+"/api/users/getSf"
    static GetSFByStatus=URLS.serverPath+"/api/users/getSfStat"
    static GetHist_By_SF=URLS.serverPath+"/api/users/listHistSf"
    static Get_Meters_By_SF=URLS.serverPath+"/api/users/getMeterSf"
    static Get_Meters_GAZ_By_SF=URLS.serverPath+"/api/users/getMeterGAZSf"
    static Reject_SF=URLS.serverPath+"/api/users/Reject/SfReject"
    static Resume_SF=URLS.serverPath+"/api/users/resumeSf"
    static Histo_Meter_Elec=URLS.serverPath+"/api/users/listHistMT"
    static Histo_Meter_Gaz=URLS.serverPath+"/api/users/listHistMT_Gaz"
    static ConfigParamInfo_Elec=URLS.serverPath+"/api/users/listConfInfoElec"
    static ConfigParamInfo_Gaz=URLS.serverPath+"/api/users/listConfInfoGaz"
    static RetryMeter_Elec=URLS.serverPath+"/api/users/Retry"
    static RetryMeter_Gaz=URLS.serverPath+"/api/users/RetryGAZ"
    static Dashbord_Info=URLS.serverPath+"/api/users/Dhashbord"
    static Dashbord_MeterGaz=URLS.serverPath+"/api/users/DhashbordGaz"
    static Dashbord_SfElec=URLS.serverPath+"/api/users/DhashbordSfElec"
    static Dashbord_SfGaz=URLS.serverPath+"/api/users/DhashbordSfGAZ"
    static List_SF_ByType=URLS.serverPath+"/api/users/Meters/Type"
    static SearchSf=URLS.serverPath+"/api/users/searchSf"

    static List_Meter_Elec_failed=URLS.serverPath+"/api/users/Meters/ElecFailed"
    static List_Meter_Gaz_failed=URLS.serverPath+"/api/users/Meters/GazFailed"

    






    /* ===================== end SF ==================== */



}