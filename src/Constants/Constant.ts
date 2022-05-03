export class URLS{
    static serverPath=" http://localhost:9098";
    static logIn=URLS.serverPath+"/login";
    static AddUser=URLS.serverPath+"/api/users/save"
    static ListUser=URLS.serverPath+"/api/users"
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
    static Reject_SF=URLS.serverPath+"/api/users/rejectSf"
    static Resume_SF=URLS.serverPath+"/api/users/resumeSf"
    /* ===================== end SF ==================== */

}