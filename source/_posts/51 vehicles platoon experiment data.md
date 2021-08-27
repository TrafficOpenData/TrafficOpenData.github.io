---
title: 51 vehicles platoon experiment data 
date: 2021-08-18
featured: true
tags:
- Traffic Experiment
category: Dataset
lede: "The experiment was carried out on December 15, 2013 on the runway and taxiway of the old airport (which was closed) in Hefei, China."
thumbnail: https://img-blog.csdnimg.cn/8b1e2fc4f3ff42f9aa28c15320a7a107.png
author: Shiteng Zheng

---

## Introduction

&emsp;The experiment was carried out on December 15, 2013 on the runway and taxiway of the old airport (which was closed) in Hefei, China. See Fig. 1(a) for the map of the airport. The trajectories of cars measured by the GPS devices installed on each car are shown in Fig. 1(b). One can see that the runway and taxiway are about 3 km long.

<div class="container">
     <div class="row">
        <div class="col-md-6"><img src="https://img-blog.csdnimg.cn/8b1e2fc4f3ff42f9aa28c15320a7a107.png" width="80%"/></div>
    </div>
</div>

<div class="container">
    <div class="row">
        <center><div class="col-md-6"><center>Fig. 1. (a) Road section for collecting 25 Vehicle Platoon Data. (b) The trajectories of cars measured by the GPS installed in the cars.</center></div></center>
    </div>
</div>


&emsp;In the experiment, the platoon has 51 cars. High-precision GPS devices were installed on the vehicles to record their locations and velocities every 0.1 second. And the corresponding relationship between the vehicle and GPS device in the experiment has not been changed. Note that we have carried out two sets of experiments, in which the sequence of the cars has been changed.

&emsp;The vehicles initially stopped bumper-to-bumper in the experiment. Then the leading car was instructed to move according to a given velocity profile, and other cars were instructed to move following each other as they normally do, but overtaking is not allowed. The velocity profile of leading vehicle is shown in Fig. 2, and the specific velocity values are shown in Table 1.

<div class="container">
    <div class="row">
        <center><div class="col-md-6"><center><img src="https://img-blog.csdnimg.cn/efec8dc8fbca4f93bc7b74940f9403fc.png" width="80%"/></center></div></center>
    </div>
</div>

<div class="container">
    <div class="row">
        <center><div class="col-md-6"><center>Fig. 2. The x location and the velocity of the leading car in the two sets of the experiment and the classification of intervals. (a) Set 1, (b) set 2. The subfigure (a) can be plot used the data of files of “51_car_P1a.xls” and “51_car_P1b.xls”, while the subfigure (b) can be plot used the data of files of “51_car_P2a.xls” and “51_car_P2b.xls”.</center></div></center>
    </div>
</div>

<div class="container">
    <div class="row">
        <center><div class="col-md-6"><center>Table 1. Speed of leading car in the intervals.</center></div></center>
    </div>
</div>

<div class="container">
    <div class="row">
		<div class="col-md-1"></div>
        <center><div class="col-md-4"><center><img src="https://img-blog.csdnimg.cn/7c4e1a53f8f44600aae7268e5806a355.png" width="40%"/></center></div></center>
    </div>
</div>

&emsp;We note that for safety reason, the actual velocity of a car shown in Fig. 2 is lower than that shown by the speedometer shown in Table 1, in particular when the velocity is high.

## Excel data description

&emsp;The measurement errors of the GPS devices were within ± 1 m for location and within ± 1 km/h for velocity. The data sampling frequency is 10 Hz. Blank data is the missing GPS data that are sometimes missing due to GPS device problem or signal problem.

&emsp;Since we have only 27 GPS devices, we cannot install the GPS on each car. In the experiment, the GPS devices were installed on the leading car and every two cars, i.e., on cars with number 1, 2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31, 34, 35, 38, 39, 42, 43, 46, 47, 50, 51. Note that the data in Excel file has been arranged in the sequence of vehicles in each run. The number in the column name is the number of the GPS device that can be ignored. 

&emsp;Each vehicle contains 3 columns of data, the meaning of each column is shown in Table 2.

<div class="container">
    <div class="row">
        <center><div class="col-md-6"><center>Table 2. The meaning of each column.</center></div></center>
    </div>
</div>

<div class="container">
    <div class="row">
        <center><div class="col-md-6"><center><img src="https://img-blog.csdnimg.cn/9dbb939947cd4003b53d28772361fc56.png" width="80%"/></center></div></center>
    </div>
</div>


<br>
<a class="btn btn-lg btn-primary" style="color: white;" href="https://labbuzhou.github.io/download/">Download</a>
<br>





