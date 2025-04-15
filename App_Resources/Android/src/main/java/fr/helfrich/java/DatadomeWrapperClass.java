package fr.helfrich.java;

import android.util.Log;
//import co.datadome.sdk;

import co.datadome.sdk.DataDomeSDK;

public class DatadomeWrapperClass {
    private static final String DATADOME_KEY = "YOUR_CLIENT_SIDE_KEY"; // à remplacer

    private DataDomeSDK.Builder dataDomeSDK;

    String rootUrl;
    String cookieName;

    public DatadomeWrapperClass(String url) {
        rootUrl = url;
        
        //dataDomeSDK = DataDomeSDK.init();
        //cookieName = dataDomeSDK.cookie().name;
    }
}
