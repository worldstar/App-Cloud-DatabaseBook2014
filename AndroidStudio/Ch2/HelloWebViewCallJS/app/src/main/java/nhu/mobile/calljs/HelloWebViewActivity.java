package nhu.mobile.calljs;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.view.KeyEvent;
import android.webkit.WebView;
import android.webkit.WebViewClient;

//請勿用Android 2.3.3模擬器上執行此程式，主因為Android 2.3.3版本中JNI呼叫的問題。
//Please don't use this program on the emulator of Android 2.3.3 because there is a bug of its JNI program.
//https://groups.google.com/forum/?fromgroups=#!topic/android-developers/mSyhMuFXRew
public class HelloWebViewActivity extends Activity {
	WebView mWebView;
	private Handler mHandler = new Handler();
	
	/** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);        
        setContentView(R.layout.main);        
        
        mWebView = (WebView) findViewById(R.id.webview);
        mWebView.getSettings().setJavaScriptEnabled(true);
        mWebView.addJavascriptInterface(new callJavaScriptInterface(), "demo");
        mWebView.loadUrl("file:///android_asset/makePhoneCall.html");        
        mWebView.setWebViewClient(new HelloWebViewClient());      
    }
       
    private class HelloWebViewClient extends WebViewClient {
        @Override
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            view.loadUrl(url);           
            return true;
        }
    }       
    
    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if ((keyCode == KeyEvent.KEYCODE_BACK) && mWebView.canGoBack()) {
            mWebView.goBack();
            return true;
        }
        return super.onKeyDown(keyCode, event);
    } 
    
    final class callJavaScriptInterface {
        callJavaScriptInterface() {
        }
        
        public void JavascriptMethod1() {
    	   mHandler.post(new Runnable() {
               public void run() {
                   //mWebView.loadUrl("javascript:initialize()");//呼叫定義在網頁中的javascript方法initialize
               }
           });
        }
        
        public void clickOnAndroidPhone(String phonenumber) {
           final String myPhoneNumber = phonenumber;
           mHandler.post(new Runnable() {
             	public void run() {
                       Uri uri = Uri.parse("tel:"+myPhoneNumber);  
                       Intent it = new Intent(Intent.ACTION_DIAL, uri);  
                       HelloWebViewActivity.this.startActivity(it);                      
                }
           });
        }         
    }
    
}