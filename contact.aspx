<%@ Page Language="C#" AutoEventWireup="true" CodeFile="contact.aspx.cs" Inherits="contact" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html>
<head>
<title>Apurv Group | Contact</title>
<link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="js/jquery.min.js"></script>
<!-- Custom Theme files -->
<!--theme-style-->
<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />	
<!--//theme-style-->
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="Furniture Home Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />

<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<!--fonts-->
<link href='http://fonts.googleapis.com/css?family=Droid+Serif:400,700' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Arimo:400,700' rel='stylesheet' type='text/css'>
<!--//fonts-->
  
</head>
<body> 
<!--header-->
<div class="header">
	<div class="banner">
		
	</div>
<!---->
<div class="header-top">

	<div class="container">
     		<%--<div class="search">
     		 	<form>
     		 		<input type="text">
					<input type="submit" value="" >
     		 	</form>
     		 </div>--%><br /><br /><br />
     		<div class="clearfix"> </div>

			<div class="bottom-header">
     		 	<div class="logo">
     		 		<h1><a href="Index.aspx">Apurv Group</a></h1>
     		 	</div>
     		 	<div class="top-nav">
				<span class="menu"><img src="images/menu.png" alt=""> </span>

     		 		<ul>
                        <li><a href="Index.aspx">Home</a></li>
     		 			<li><a href="about.aspx">About</a></li>
     		 			<li><a href="service.aspx">Services</a></li>
						<li><a href="testimonials.aspx">Testimonials</a></li>
     		 			<li><a href="gallary.aspx">Gallery</a></li>
     		 			<li class="active"><a href="contact.aspx">Contact</a></li>

     		 			<div class="clearfix"> </div>
     		 		</ul>
					<script>
						$("span.menu").click(function(){
							$(".top-nav ul").slideToggle(500, function(){
							});
						});
					</script>

     		 	</div>
     		 <div class="clearfix"> </div>
     		</div>
	</div>

</div>
<div class="content">
<!---->
<div class="container">
	<div class="contact">
	<h2>CONTACT</h2>
				<div class="contact-in">
				
				<div class=" col-md-9 contact-left">
				  
					    <form  runat="server">
					    	<div>

						    	<span>Name</span>
                                <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
						    </div>
						    <div>
						    	<span>E-Mail</span>
                                <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
						    </div>
						    
						     <div>
						    	<span>Mobile</span>
                                <asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
						    </div>
						    <div>

						    	<span>Message</span>
                                <asp:TextBox ID="TextBox4" runat="server" TextMode="MultiLine"></asp:TextBox>
						    </div>
						   <div>
                               <asp:Button ID="Button1" runat="server" Text="Send" onclick="Button1_Click" />
								
						  </div>
					    </form>
				  </div>

				<div class=" col-md-3 contact-right">
				     	<h5>Company Information</h5>
						    	<p style="color:Black;">Apurv Group ,</p>
						   		<p style="color:Black;">A-31,Nice Area M.I.D.C,</p>
						   		<p style="color:Black;">Satpur</p>
						   		<p style="color:Black;">Nashik</p>
				   		<p style="color:Black;">Mobile:(91) 8308827096</p>				   		
				 	 	<p style="color:Black;">Email: info@apurvagroup.com</p>
				 	 	<p style="color:Black;">     : yogesh_apurva@rediffmail.com</p>
				   		<p style="color:Black;">Follow on: <a href="https://web.facebook.com/yogesh.kharat.7568">Facebook</a>, <a href="https://web.facebook.com/yogesh.kharat.7568">Twitter</a></p>
				    </div>
					  <div class="clearfix"></div>

				 </div>
				
			    
      		</div>

	</div>
	 <div class="map">
				 <iframe src="#"></iframe>
				</div>
</div>
<div class="footer">
		<div class="container">

			<div class="footer-top">
				
				<div class="col-md-4 amet-sed ">
				<h4>Follow Us</h4>
				<ul class="social-icons">
					<li><a href="https://web.facebook.com/yogesh.kharat.7568"><span> </span> </a></li>

					<li class="twitter"><a href="https://web.facebook.com/yogesh.kharat.7568"><span> </span></a></li>
					<li class="gmail"><a href="https://web.facebook.com/yogesh.kharat.7568"><span> </span> </a></li>
					<li class="print"><a href="#"><span> </span> </a></li>
				</ul>
				</div>
				<div class="clearfix"> </div>

			</div>
				<p class="footer-class">© 2015 Furniture Home All Rights Reserved | Design by  <a href="http://www.trimatrixsoftwaresolutions.com/" target="_blank">sanjay sudam shinde(mob-9689616357)</a> </p>
		</div>
	</div>
</body>
</html>									