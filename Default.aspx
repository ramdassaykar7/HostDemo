<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html>
<head>
<title>Furniture Home A Furniture Category Flat Bootstarp Resposive Website Template | Home :: w3layouts</title>
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
  <script src="js/responsiveslides.min.js"></script>
<script>
    // You can also use "$(window).load(function() {"
    $(function () {
      // Slideshow 1
      $("#slider1").responsiveSlides({
         auto: true,
		 nav: true,
		 speed: 500,
		 namespace: "callbacks",
      });
    });
  </script>
</head>
<body> 
<!--header-->
<div class="header">
<div class="slider">
	    <ul class="rslides" id="slider1">

	      <li><img src="images/banner33.jpg" alt=""></li>
	      <li><img src="images/banner22.jpg" alt=""></li>
	      <li><img src="images/banner44.jpg" alt=""></li>
	    </ul>
    </div>
<!---->
<div class="header-top">
	<div class="container">
     		<div class="search">
     		 	<form>

     		 		<input type="text">
					<input type="submit" value="" >
     		 	</form>
     		 </div>
     		<div class="clearfix"> </div>
			<div class="bottom-header">
     		 	<div class="logo">
     		 		<h1><a href="Index.aspx">Nilesh Furniture</a></h1>

     		 	</div>
     		 	<div class="top-nav">
				<span class="menu"><img src="images/menu.png" alt=""> </span>

     		 		<ul>
						<li  class="active"><a href="#">Home</a></li>
     		 			<li><a href="#">About</a></li>
     		 			<li><a href="#">Services</a></li>
						<li><a href="#">Testimonials</a></li>
     		 			<li><a href="#">Gallary</a></li>
     		 			<li><a href="#">Contact</a></li>
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
	<div class="top-grid-top">
		<div class="top-grids">				
		
			<div class="col-md-4 top-grid">

				<h3>Welcome</h3>
				<a href="single.html"><img class="img-responsive" src="images/pi.jpg" title="name" alt=""></a>
				<a href="single.html" class="read">Read more</a>
			</div>
			<div class="col-md-4 top-grid">
				<h3>Our history</h3>
				<a href="single.html"><img class="img-responsive" src="images/pi1.jpg" title="name" alt="" ></a>

				<a href="single.html" class="read">Read more</a>
			</div>
			<div class="col-md-4 top-grid" >
				<h3>Our Services</h3>
				<a href="single.html"><img class="img-responsive" src="images/pi2.jpg" title="name" alt="" ></a>
				<a href="single.html" class="read">Read more</a>
			</div>

			<div class="clearfix"> </div>
		</div>
	</div>
	<!---->
		<div class="middle-grid">			
			<div class="col-md-4 grid-middle">					
											
			</div>
		<div class="clearfix"> </div>
		</div>
		<!---->
		<div class="bottom-grid">
			<h3>Categories Design</h3>
			<div class="col-md-4 bottom-grids">
			<h3 style="text-align:center; color:Black;">Kichen Trolley</h3>
				<a href="#"><img class="img-responsive" src="images/vi.jpg" title="name" alt="" ></a>
				<p>We provide wide range of kitchen trolleys which are made to best utilization of Kitchen Space, make Kitchen completely a functional place & enhance the beauty of Kitchen.</p>

			</div>
			<div class="col-md-4 bottom-grids">
			<h3 style="text-align:center; color:Black;">Interior Work</h3>
				<a href="#"><img class="img-responsive" src="images/vi1.jpg" title="name" alt="" ></a>
				<p>May it be the Interior design of your bedroom, study, livingroom, dinning we have a solution for it all. We provide best kind of interior layouts and designer furniture that needs to be used to make yout interior attractive and descent.</p>
			</div>
		<div class="col-md-4 bottom-grids">
		<h3 style="text-align:center; color:Black;">Kitchen Accessories</h3>
				<a href="#"><img class="img-responsive" src="images/vi1.jpg" title="name" alt="" ></a>
				<p>Edge Binded Shutters, Edge Binded Glossy Shutters, Polyacrylic Shutters, Post Forming Shutters, SS Baskets and SS Frames, Wooden Carcass, Kitchen Cabinet Accessories.</p>
			</div>
			<div class="clearfix"> </div>

		</div>
	</div>
</div>
<div class="footer">
		<div class="container">
			<div class="footer-top">			

				<div class="col-md-4 amet-sed ">
				<h4>Follow Us</h4>
				<ul class="social-icons">
					<li><a href="#"><span> </span> </a></li>
					<li class="twitter"><a href="#"><span> </span></a></li>
					<li class="gmail"><a href="#"><span> </span> </a></li>

					<li class="print"><a href="#"><span> </span> </a></li>
				</ul>
				</div>
				<div class="clearfix"> </div>
			</div>
				<p class="footer-class">© 2015 Furniture Home All Rights Reserved | Design by  <a href="http://www.trimatrixsoftwaresolutions.com/" target="_blank">Sanjay Sudam Shinde</a> </p>

		</div>
	</div>
</body>
</html>