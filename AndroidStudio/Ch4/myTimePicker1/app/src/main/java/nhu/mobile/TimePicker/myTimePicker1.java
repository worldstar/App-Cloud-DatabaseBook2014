package nhu.mobile.TimePicker;

import java.util.Calendar;

import android.app.Activity;
import android.app.DatePickerDialog;
import android.app.Dialog;
import android.app.TimePickerDialog;
import android.os.Bundle;
import android.widget.DatePicker;
import android.widget.TimePicker;
import android.widget.Toast;

public class myTimePicker1 extends Activity {
    private int mHour;
    private int mMinute;
    static final int TIME_DIALOG_ID = 0;
    
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        
        showDialog(TIME_DIALOG_ID);
    }
      
    @Override
    protected Dialog onCreateDialog(int id) {
        switch (id) {
          case TIME_DIALOG_ID:
        	  Calendar calendar1 = Calendar.getInstance();
        	  mHour = calendar1.get(Calendar.HOUR_OF_DAY);
        	  mMinute = calendar1.get(Calendar.MINUTE);        	  
        	  return new TimePickerDialog(this,
        			  mTimeSetListener,
        			  mHour, mMinute, false);
        }
        return null;
	}
    
 // the callback received when the user "sets" the time in the dialog
    private TimePickerDialog.OnTimeSetListener mTimeSetListener =
        new TimePickerDialog.OnTimeSetListener() {
            public void onTimeSet(TimePicker view, int hourOfDay, int minute) {
                mHour = hourOfDay;
                mMinute = minute;                
                Toast.makeText(myTimePicker1.this, "選擇的時間是" +mHour+":"+mMinute, Toast.LENGTH_SHORT).show();
            }
    };   
}