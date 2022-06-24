/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package API;

/**
 *
 * @author syabil-lappy
 */

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConMan {
    static Connection con; 
    static String url; 
    public static Connection getConnection(){

        try{
            Class.forName("com.mysql.jdbc.Driver"); 
            try{
            url="jdbc:mysql://localhost:3307/lab5frontend";

    con=DriverManager.getConnection(url,"root","admin");
            }
            catch(SQLException e){
                e.printStackTrace();
            }
        }
        catch(ClassNotFoundException e){
            e.printStackTrace();
        }
       return con;
    }
}
