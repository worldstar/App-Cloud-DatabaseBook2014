package nhu.mobile.DatePicker;

import java.util.Calendar;
import android.app.Activity;
import android.app.DatePickerDialog;
import android.app.Dialog;
import android.os.Bundle;
import android.widget.DatePicker;
import android.widget.Toast;

public class myDatePicker1 extends Activity {
    private int myYear;
    private int myMonth;
    private int myDay; 
    static final int DATE_DIALOG_ID = 0;

	
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        
        showDialog(DATE_DIALOG_ID);        
    }
    
    @Override
    protected Dialog onCreateDialog(int id) {
        switch (id) {
          case DATE_DIALOG_ID:
          //設定今天的日期
          Calendar calendar1 = Calendar.getInstance();
          myYear = calendar1.get(Calendar.YEAR);
          myMonth = calendar1.get(Calendar.MONTH);
          myDay = calendar1.get(Calendar.DATE);
          return new DatePickerDialog(this,
                        mDateSetListener,
                        myYear, myMonth, myDay);
        }
        return null;
    } 
  
    
    // the callback received when the user "sets" the date in the dialog
    private DatePickerDialog.OnDateSetListener mDateSetListener =
            new DatePickerDialog.OnDateSetListener() {
                public void onDateSet(DatePicker view, int year, 
                                      int monthOfYear, int dayOfMonth) {
                    myYear = year;
                    myMonth = monthOfYear + 1;
                    myDay = dayOfMonth;
                    String combinedResults = myYear+"/"+myMonth+"/"+myDay;
                	Toast.makeText(myDatePicker1.this, "選擇的日期是" +combinedResults, Toast.LENGTH_SHORT).show();            
                }
    };	    
}