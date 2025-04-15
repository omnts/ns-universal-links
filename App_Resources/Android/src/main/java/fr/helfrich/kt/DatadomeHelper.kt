package fr.helfrich.kt

class DatadomeHelper(val rootUrl: String) {
    var cookieName = ""
    //private lateinit var dataDomeSDK: SDKBase
    //private DataDomeSDK.Builder dataDomeSDK;

    fun showRootURL() { 
        println("Kotlin : rootUrl = ${rootUrl}")
    }

    // Bloc d'initialisation
    init {
        println("Init DatadomeHelper")

        /*
        dataDomeSDK = SDKBase
            .Builder()
            .listener(captchaListener)
            .context(this)
            .backBehavior(BackBehavior.GO_BACK)
            .build()

        val cookie = dataDomeSDK.cookie("https://advango.fr")
        if (!cookie.isNullOrBlank()) {
            cookieName = cookie.name
        }
        */
    }
}