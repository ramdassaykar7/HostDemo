using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using System.Net.Mail;

public partial class contact : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void Button1_Click(object sender, EventArgs e)
    {

        MailMessage adminmsg = new MailMessage();
        adminmsg.IsBodyHtml = true;
        adminmsg.To.Add("ketaki.sonawane16@gmail.com");
        adminmsg.From = new MailAddress(TextBox2.Text, TextBox1.Text, System.Text.Encoding.UTF8);
        adminmsg.Subject = "Enquiry";
        adminmsg.BodyEncoding = System.Text.Encoding.UTF8;
        string adminbody = "<table frame=box line-height=50 Width=500 CellSpacing=2 Align=center><tr BgColor=#a7a7a7><td colspan=3 align=center>Enquiry Details</td></tr><tr BgColor=#CCCCCC><td >Name</td><td Align=center>:</td><td>" + TextBox1.Text + "</td></tr><tr BgColor=#EEEEEE><td>Email Id</td><td Align=center>:</td><td>" + TextBox2.Text + "</td></tr><tr BgColor=#CCCCCC><td>Mobile No</td><td Align=center>:</td><td>" + TextBox3.Text + "</td></tr><tr BgColor=#EEEEEE><td>Message</td><td Align=center>:</td><td>" + TextBox4.Text + "</td></tr></table>";

        adminmsg.Body = adminbody;
        SmtpClient client = new SmtpClient();
        client.Credentials = new System.Net.NetworkCredential("apurvgroup@gmail.com", "apurvgroup123");
        client.Port = 587;
        client.EnableSsl = true;
        client.Host = "smtp.gmail.com";

        try
        {
            //client.Send(msg);
            client.Send(adminmsg);

            //Label1.Text = "mail send successfully..";
        }
        catch (Exception)
        {
            Response.Write(@"<script>alert('Error')</script>");
        }
        finally
        {
            TextBox1.Text = "";
            TextBox2.Text = "";
            TextBox3.Text = "";
            TextBox4.Text = "";
           


        }
    }
}
