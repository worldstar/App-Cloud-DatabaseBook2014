package nhu.mobile.Tab;

import android.app.Activity;
import android.os.Bundle;
import android.widget.TextView;

public class secondClass extends Activity {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.textviewlayout);
        
        TextView textView1 = (TextView) findViewById(R.id.TextView01);
        textView1.setText("第二個程式");        
    }
}
