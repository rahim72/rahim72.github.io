<script setup>
const btn = document.querySelector('#btn');
const radioButtons = document.querySelectorAll('input[name="tab"]');

for (const radioButton of radioButtons) {
    if (radioButton.checked) {
        show1();
        break;
    }
}
function show1() {
    document.getElementById('div1').style.display = 'none';
    document.getElementById('div2').style.display = 'block';
}
function show2() {
    document.getElementById('div2').style.display = 'none';
    document.getElementById('div1').style.display = 'block';
}

</script>
<template lang="">
    <div>
        <section class="content">
            <div class="container-fluid">
                <form action="">
                    <div class="row">
                        <div class="col-md-3">
                            <!-- Profile Image >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<-->
                            <div class="card card-primary card-outline">
                                <div class="card-body box-profile">
                                    <div class="container">
                                        <div class="card card-primary">
                                            <div class="card-header">
                                                <h4>اطلاعات پایه</h4>
                                            </div>
                                            <div class="card-body">
                                                <!-- Code Person ------------------------------------------------------------ -->
                                                <div class="col-auto text-center">
                                                    <label for="personal_code" class="text-muted control-label">
                                                        کد شخص
                                                    </label>
                                                </div>
                                                <div class="col-auto">
                                                    <input type="text" name="personal_code" 
                                                        class="form-control text-center" readonly />
                                                </div>
                                                <br>
                                                <!-- Name ------------------------------------------------------------------- -->
                                                <div class="col-auto text-center">
                                                    <label for="personal_code" class="text-muted control-label">
                                                        تلفن ثابت
                                                    </label>
                                                </div>
                                                <div class="col-auto">
                                                    <input type="text" name="personal_code" 
                                                        class="form-control text-center" readonly />
                                                </div>
                                                <div class="col-auto text-center">
                                                    <label for="personal_code" class="text-muted control-label">
                                                        شماره همراه
                                                    </label>
                                                </div>
                                                <div class="col-auto">
                                                    <input type="text" name="personal_code" 
                                                        class="form-control text-center" readonly />
                                                </div>
                                                <div class="col-auto text-center">
                                                    <label for="personal_code" class="text-muted control-label">
                                                        کد ملک
                                                    </label>
                                                </div>
                                                <div class="col-auto">
                                                    <input type="text" name="personal_code" 
                                                        class="form-control text-center" readonly />
                                                </div>
                                            </div>
                                        </div>
    
                                    </div>
                                </div>
                                <!-- /.card-body -->
                            </div>
                            <!-- /.card -->
    
                            <!-- About Me Box -->
                            <div class="card card-primary">
                                <div class="card-header justify-content-center">
                                    <h3 class="card-title justify-content-center"> اطلاعات پایه ملک</h3>
                                </div>
                                <!-- /.card-header -->
                                <div class="card-body">
                                    <!-- Code Person ------------------------------------------------------------ -->
                                    <div class="col-auto text-center">
                                        <label for="personal_code" class="text-muted control-label">
                                            نوع سند
                                        </label>
                                    </div>
                                    <div class="col-auto">
                                        <input type="text" name="personal_code" 
                                            class="form-control text-center" readonly />
                                    </div>
                                    <!-- Code Person ------------------------------------------------------------ -->
                                    <div class="col-auto text-center">
                                        <label for="personal_code" class="text-muted control-label">
                                            نوع ملک
                                        </label>
                                    </div>
                                    <div class="col-auto">
                                        <input type="text" name="personal_code" 
                                            class="form-control text-center" readonly />
                                    </div>
                                    <!-- Code Person ------------------------------------------------------------ -->
                                    <div class="col-auto text-center">
                                        <label for="personal_code" class="text-muted control-label">
                                            سال ساخت
                                        </label>
                                    </div>
                                    <div class="col-auto">
                                        <input type="text" name="personal_code" 
                                            class="form-control text-center" readonly />
                                    </div>
                                    <!-- Code Person ------------------------------------------------------------ -->
                                    <div class="col-auto text-center">
                                        <label for="personal_code" class="text-muted control-label">
                                            تعداد اتاق
                                        </label>
                                    </div>
                                    <div class="col-auto">
                                        <input type="text" name="personal_code" 
                                            class="form-control text-center" readonly />
                                    </div>
                                    <!-- Code Person ------------------------------------------------------------ -->
                                    <div class="col-auto text-center">
                                        <label for="personal_code" class="text-muted control-label">
                                            نوع کاربری
                                        </label>
                                    </div>
                                    <div class="col-auto">
                                        <input type="text" name="personal_code" 
                                            class="form-control text-center" readonly />
                                    </div>
    
                                </div>
                                <!-- /.card-body -->
                            </div>
                            <!-- /.card -->
                        </div>
                        <!-- /.col -->
    
                        <div class="col-md-9">
                            <div class="card">
                                <div class="card-header p-2">
                                    <ul class="nav nav-pills">
                                        <li class="nav-item"><a class="nav-link active" href="#activity" data-toggle="tab">
                                                رهن و اجاره
                                            </a></li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#options" data-toggle="tab">
                                                امکانات
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#media" data-toggle="tab">
                                                ثبت رسانه
                                            </a>
                                        </li>
                                        <li class="nav-item"><a class="nav-link" href="#more_options" data-toggle="tab">
                                                گزینه های سفارشی
                                            </a>
                                        </li>
                                    </ul>
                                </div><!-- /.card-header -->
                                <div class="card-body">
                                    <div class="tab-content">
                                        <div class="active tab-pane" id="activity">
                                            <div class="card card-primary">
                                                <div class="card-header">
                                                    <h4>
                                                        میزان اجاره بهاء
                                                    </h4>
                                                </div>
                                                <div class="card-body">
    
                                                    <p class="card-text">
                                                        یکی از گزینه های زیر را انتخاب کرده و مبالغ مورد نظر خود را وارد
                                                        کنید
                                                    </p>
    
                                                    <!--  Rahn And Ejare ...................................................................... -->
                                                    <div class="col">
                                                        <!-- Bedon Baze Ghemat -->
                                                        <label for="bedon_baze"> </label>
                                                        <input type="radio" id="bedon_baze" name="tab" value="igotnone"
                                                            checked onclick="show1(); " />
                                                        مبلغ رهن با بازه قیمت
    
                                                        <!--  --------------------------------------------------------------------- -->
                                                        <!-- Ba Baze Ghemat -->
                                                        <label for="ba_baze"> </label>
                                                        <input type="radio" id="ba_baze" name="tab" value="igottwo"
                                                            onclick="show2(); " />
                                                        مبلغ رهن بدون بازه قیمت
                                                        <!--  --------------------------------------------------------------------- -->
                                                    </div>
                                                    <hr>
                                                    <div id="div2" class="babaze" name="div2">
                                                        <div class="row">
                                                            <label> مبلغ رهن</label>
                                                            <div class="col">
                                                                <!-- <input type="text" id="At_least" name="Price-At-least" >  -->
                                                                <div class="form-floating pad-div">
                                                                    <input class="form-control" placeholder="حداقل قیمت"
                                                                        id="floatingTextarea" />
                                                                    <label for="floatingTextarea">حداقل قیمت</label>
                                                                </div>
                                                            </div>
                                                            <div class="col">
    
                                                                <!-- <input type="text" id="At_least" name="Price-At-least" >  -->
                                                                <div class="form-floating pad-div">
                                                                    <input class="form-control" placeholder="حداقل قیمت"
                                                                        id="floatingTextarea" />
                                                                    <label for="floatingTextarea">حداکثر قیمت</label>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="form-floating">
                                                                    <select class="form-select" id="floatingSelect"
                                                                        aria-label="Floating label select example">
                                                                        <option selected>واحد پول رو انتخاب کنید</option>
                                                                        <option value="1">ریال</option>
                                                                        <option value="2">تومان</option>
                                                                    </select>
                                                                    <label for="floatingSelect"> واحد پول</label>
                                                                </div>
                                                            </div>
    
                                                        </div>
                                                        <br>
                                                        <div class="row">
                                                            <label> مبلغ اجاره</label>
                                                            <div class="col">
                                                                <!-- <input type="text" id="At_least" name="Price-At-least" >  -->
                                                                <div class="form-floating pad-div">
                                                                    <input class="form-control" placeholder="حداقل قیمت"
                                                                        id="floatingTextarea" />
                                                                    <label for="floatingTextarea">حداقل قیمت</label>
                                                                </div>
                                                            </div>
    
                                                            <div class="col">
    
                                                                <!-- <input type="text" id="At_least" name="Price-At-least" >  -->
                                                                <div class="form-floating pad-div">
                                                                    <input class="form-control" placeholder="حداقل قیمت"
                                                                        id="floatingTextarea" />
                                                                    <label for="floatingTextarea">حداکثر قیمت</label>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="form-floating">
                                                                    <select class="form-select" id="floatingSelect"
                                                                        aria-label="Floating label select example">
                                                                        <option selected>واحد پول رو انتخاب کنید</option>
                                                                        <option value="1">ریال</option>
                                                                        <option value="2">تومان</option>
                                                                    </select>
                                                                    <label for="floatingSelect"> واحد پول</label>
                                                                </div>
                                                            </div>
    
                                                        </div>
                                                    </div>
                                                    <!--  Div For Bedon Baze Ghemat -->
                                                    <div id="div1" class="bedonbaze" name="div1">
                                                        <div class="row">
                                                            <label> مبلغ رهن</label>
                                                            <div class="col">
                                                                <!-- <input type="text" id="At_least" name="Price-At-least" >  -->
                                                                <div class="form-floating pad-div">
                                                                    <input class="form-control" placeholder="حداقل قیمت"
                                                                        id="floatingTextarea" />
                                                                    <label for="floatingTextarea"> قیمت</label>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="form-floating">
                                                                    <select class="form-select" id="floatingSelect"
                                                                        aria-label="Floating label select example">
                                                                        <option selected>واحد پول رو انتخاب کنید</option>
                                                                        <option value="1">ریال</option>
                                                                        <option value="2">تومان</option>
                                                                    </select>
                                                                    <label for="floatingSelect"> واحد پول</label>
                                                                </div>
                                                            </div>
    
                                                        </div>
                                                        <br>
                                                        <div class="row">
                                                            <label> مبلغ اجاره</label>
                                                            <div class="col">
                                                                <!-- <input type="text" id="At_least" name="Price-At-least" >  -->
                                                                <div class="form-floating pad-div">
                                                                    <input class="form-control" placeholder="حداقل قیمت"
                                                                        id="floatingTextarea" />
                                                                    <label for="floatingTextarea"> قیمت</label>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="form-floating">
                                                                    <select class="form-select" id="floatingSelect"
                                                                        aria-label="Floating label select example">
                                                                        <option selected>واحد پول رو انتخاب کنید</option>
                                                                        <option value="1">ریال</option>
                                                                        <option value="2">تومان</option>
                                                                    </select>
                                                                    <label for="floatingSelect"> واحد پول</label>
                                                                </div>
                                                            </div>
    
                                                        </div>
    
    
                                                    </div>
                                                </div>
                                            </div>
    
                                            <div class="card card-primary">
                                                <div class="card-header">
                                                    <h3>
                                                        اولویت سکونت
    
                                                    </h3>
    
                                                </div>
                                                <div class="card-body">
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1"
                                                            value="option1">
                                                        <label class="form-check-label" for="inlineCheckbox1">
                                                            خانواده پر جمعیت
                                                        </label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2"
                                                            value="option2">
                                                        <label class="form-check-label" for="inlineCheckbox2">
                                                            خانواده کم جمعیت
                                                        </label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox3"
                                                            value="option3">
                                                        <label class="form-check-label" for="inlineCheckbox3">
                                                            زوج جوان
                                                        </label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox4"
                                                            value="option4">
                                                        <label class="form-check-label" for="inlineCheckbox4">
                                                            زوج جوان
                                                        </label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox5"
                                                            value="option5">
                                                        <label class="form-check-label" for="inlineCheckbox5">
                                                            مجرد
                                                        </label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox6"
                                                            value="option6">
                                                        <label class="form-check-label" for="inlineCheckbox6">
                                                            متاهل
                                                        </label>
                                                    </div>
    
                                                </div>
    
                                            </div>
                                            <div class="row">
    
                                                <div class="col-md-4">
    
                                                    <div class="card card-primary">
                                                        <div class="card-header">
                                                            <h4>
                                                                مشخصات زمین
                                                            </h4>
                                                        </div>
                                                        <div class="card-body">
                                                            <div class="row">
    
                                                                <div class="col">
                                                                    <!-- <input type="text" id="At_least" name="Price-At-least" >  -->
                                                                    <div class="form-floating pad-div">
                                                                        <input class="form-control" placeholder="مساحت"
                                                                            id="floatingTextarea" />
                                                                        <label for="floatingTextarea">مساحت</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col">
                                                                    <div class="form-floating">
                                                                        <select class="form-select" id="floatingSelect"
                                                                            aria-label="Floating label select example">
                                                                            <option selected>
                                                                                واحد مساحت را انتخاب کنید
                                                                            </option>
                                                                            <option value="1">متر مربع</option>
                                                                            <option value="2">هکتار</option>
                                                                        </select>
                                                                        <label for="floatingSelect"> واحد مساحت</label>
                                                                    </div>
                                                                </div>
    
                                                            </div>
                                                            <br>
    
                                                            <div class="row">
                                                                <div class="col">
                                                                    <!-- <input type="text" id="At_least" name="Price-At-least" >  -->
                                                                    <div class="form-floating pad-div">
                                                                        <input class="form-control" placeholder="مساحت"
                                                                            id="floatingTextarea" />
                                                                        <label for="floatingTextarea">زیر بنا</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col">
                                                                    <div class="form-floating">
                                                                        <select class="form-select" id="floatingSelect"
                                                                            aria-label="Floating label select example">
                                                                            <option selected>
                                                                                واحد زیربنا را انتخاب کنید
                                                                            </option>
                                                                            <option value="1">متر مربع</option>
                                                                            <option value="2">هکتار</option>
                                                                        </select>
                                                                        <label for="floatingSelect"> واحد زیربنا</label>
                                                                    </div>
    
                                                                </div>
    
                                                            </div>
    
    
    
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-8">
    
                                                    <div class="card card-primary">
                                                        <div class="card-header">
                                                            <h4>
                                                                مختصات جغرافیایی
                                                            </h4>
                                                        </div>
                                                        <div class="card-body">
    
    
                                                            <div class="row">
                                                                <div class="col">
                                                                    <label for="state">* استان :</label>
                                                                    <select name="state"
                                                                        onChange="irancitylist(this.value);"
                                                                        class="form-select">
                                                                        <option value="0">لطفا استان را انتخاب
                                                                            نمایید
                                                                        </option>
                                                                        <option value="تهران">تهران</option>
                                                                        <option value="گیلان">گیلان</option>
                                                                        <option value="آذربایجان شرقی">آذربایجان
                                                                            شرقی
                                                                        </option>
                                                                        <option value="خوزستان">خوزستان</option>
                                                                        <option value="فارس">فارس</option>
                                                                        <option value="اصفهان">اصفهان</option>
                                                                        <option value="خراسان رضوی">خراسان رضوی
                                                                        </option>
                                                                        <option value="قزوین">قزوین</option>
                                                                        <option value="سمنان">سمنان</option>
                                                                        <option value="قم">قم</option>
                                                                        <option value="مرکزی">مرکزی</option>
                                                                        <option value="زنجان">زنجان</option>
                                                                        <option value="مازندران">مازندران</option>
                                                                        <option value="گلستان">گلستان</option>
                                                                        <option value="اردبیل">اردبیل</option>
                                                                        <option value="آذربایجان غربی">آذربایجان
                                                                            غربی
                                                                        </option>
                                                                        <option value="همدان">همدان</option>
                                                                        <option value="کردستان">کردستان</option>
                                                                        <option value="کرمانشاه">کرمانشاه</option>
                                                                        <option value="لرستان">لرستان</option>
                                                                        <option value="بوشهر">بوشهر</option>
                                                                        <option value="کرمان">کرمان</option>
                                                                        <option value="هرمزگان">هرمزگان</option>
                                                                        <option value="چهارمحال و بختیاری">چهارمحال
                                                                            و
                                                                            بختیاری</option>
                                                                        <option value="یزد">یزد</option>
                                                                        <option value="سیستان و بلوچستان">سیستان و
                                                                            بلوچستان</option>
                                                                        <option value="ایلام">ایلام</option>
                                                                        <option value="کهگلویه و بویراحمد">کهگلویه و
                                                                            بویراحمد</option>
                                                                        <option value="خراسان شمالی">خراسان شمالی
                                                                        </option>
                                                                        <option value="خراسان جنوبی">خراسان جنوبی
                                                                        </option>
                                                                        <option value="البرز">البرز</option>
                                                                    </select>
                                                                </div>
                                                                <div class="col">
                                                                    <label for="city">* شهر :</label>
                                                                    <div>
                                                                        <select name="city" id="city" class="form-select">
                                                                            <option value="0">لطفا استان را انتخاب
                                                                                نمایید
                                                                            </option>
    
                                                                        </select>
    
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <br>
                                                            <div class="form-group">
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <div class="form-floating pad-div">
                                                                            <input class="form-control" placeholder="منطقه"
                                                                                id="floatingText_Area" />
                                                                            <label for="floatingText_Area"> منطقه</label>
                                                                            <small id="helpId" class="text-muted">
                                                                                منطقه شهرداری
                                                                            </small>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col">
                                                                        <div class="form-floating pad-div">
                                                                            <input class="form-control" placeholder="خیابان"
                                                                                id="floatingText_Avenue" />
                                                                            <label for="floatingText_Avenue"> خیابان</label>
                                                                        </div>
                                                                        <!-- <small id="helpId" class="text-muted">
                                                                        </small> -->
                                                                    </div>
    
                                                                </div>
    
                                                            </div>
    
                                                            <div class="form-group">
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <div class="form-floating pad-div">
                                                                            <input class="form-control" placeholder="پلاک"
                                                                                id="floatingText_Plaque" />
                                                                            <label for="floatingText_Plaque"> پلاک</label>
                                                                            <small id="helpId" class="text-muted">
    
                                                                            </small>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col">
                                                                        <div class="form-floating pad-div">
                                                                            <input class="form-control"
                                                                                placeholder="کد پستی"
                                                                                id="floatingText_Postal_code" />
                                                                            <label for="floatingText_Postal_code">
                                                                                کد پستی</label>
                                                                        </div>
                                                                        <!-- <small id="helpId" class="text-muted">
                                                                        </small> -->
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <br>
    
                                                            <div class="form-group">
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <div class="form-floating pad-div">
                                                                            <input class="form-control" placeholder="آدرس"
                                                                                id="floatingText_Address" />
                                                                            <label for="floatingText_Address">
                                                                                آدرس</label>
                                                                            <small id="helpId" class="text-muted">
                                                                                آدرس کامل خانه را وارد کنید
                                                                            </small>
                                                                        </div>
                                                                    </div>
    
                                                                </div>
    
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
    
                                            </div>
    
                                        </div>
                                        <!-- /.tab-pane -->
                                        <div class="tab-pane" id="options">
                                            <!-- The timeline -->
                                            <ul class="timeline timeline-inverse">
                                                <!-- timeline time label -->
                                                <li class="time-label">
                                                    <span class="bg-danger">
                                                        10 Feb. 2014
                                                    </span>
                                                </li>
                                                <!-- /.timeline-label -->
                                                <!-- timeline item -->
                                                <li>
                                                    <i class="fa fa-envelope bg-primary"></i>
    
                                                    <div class="timeline-item">
                                                        <span class="time"><i class="fa fa-clock-o"></i> 12:05</span>
    
                                                        <h3 class="timeline-header"><a href="#">Support Team</a> sent
                                                            you an email</h3>
    
                                                        <div class="timeline-body">
                                                            Etsy doostang zoodles disqus groupon greplin oooj voxy
                                                            zoodles,
                                                            weebly ning heekya handango imeem plugg dopplr jibjab,
                                                            movity
                                                            jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo
                                                            kaboodle
                                                            quora plaxo ideeli hulu weebly balihoo...
                                                        </div>
                                                        <div class="timeline-footer">
                                                            <a href="#" class="btn btn-primary btn-sm">Read more</a>
                                                            <a href="#" class="btn btn-danger btn-sm">Delete</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <!-- END timeline item -->
                                                <!-- timeline item -->
                                                <li>
                                                    <i class="fa fa-user bg-info"></i>
    
                                                    <div class="timeline-item">
                                                        <span class="time"><i class="fa fa-clock-o"></i> 5 mins
                                                            ago</span>
    
                                                        <h3 class="timeline-header no-border"><a href="#">Sarah
                                                                Young</a> accepted your friend request
                                                        </h3>
                                                    </div>
                                                </li>
                                                <!-- END timeline item -->
                                                <!-- timeline item -->
                                                <li>
                                                    <i class="fa fa-comments bg-warning"></i>
    
                                                    <div class="timeline-item">
                                                        <span class="time"><i class="fa fa-clock-o"></i> 27 mins
                                                            ago</span>
    
                                                        <h3 class="timeline-header"><a href="#">Jay White</a> commented
                                                            on your post</h3>
    
                                                        <div class="timeline-body">
                                                            Take me to your leader!
                                                            Switzerland is small and neutral!
                                                            We are more like Germany, ambitious and misunderstood!
                                                        </div>
                                                        <div class="timeline-footer">
                                                            <a href="#" class="btn btn-warning btn-flat btn-sm">View
                                                                comment</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <!-- END timeline item -->
                                                <!-- timeline time label -->
                                                <li class="time-label">
                                                    <span class="bg-success">
                                                        3 Jan. 2014
                                                    </span>
                                                </li>
                                                <!-- /.timeline-label -->
                                                <!-- timeline item -->
                                                <li>
                                                    <i class="fa fa-camera bg-purple"></i>
    
                                                    <div class="timeline-item">
                                                        <span class="time"><i class="fa fa-clock-o"></i> 2 days
                                                            ago</span>
    
                                                        <h3 class="timeline-header"><a href="#">Mina Lee</a> uploaded
                                                            new photos</h3>
    
                                                        <div class="timeline-body">
                                                            <img src="http://placehold.it/150x100" alt="..." class="margin">
                                                            <img src="http://placehold.it/150x100" alt="..." class="margin">
                                                            <img src="http://placehold.it/150x100" alt="..." class="margin">
                                                            <img src="http://placehold.it/150x100" alt="..." class="margin">
                                                        </div>
                                                    </div>
                                                </li>
                                                <!-- END timeline item -->
                                                <li>
                                                    <i class="fa fa-clock-o bg-gray"></i>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- /.tab-pane -->
    
                                        <div class="tab-pane" id="media">
                                            <form class="form-horizontal">
    
                                                <div class="form-group">
                                                    <label for="inputName" class="col-sm-2 control-label">نام </label>
                                                    <div class="col-sm-10">
                                                        <input type="email" class="form-control" id="inputName"
                                                            placeholder="نام">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputEmail" class="col-sm-2 control-label">نام
                                                        خانوادگی</label>
    
                                                    <div class="col-sm-10">
                                                        <input type="email" class="form-control" id="inputEmail"
                                                            placeholder="ایمیل">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputName2" class="col-sm-2 control-label">ایمیل</label>
    
                                                    <div class="col-sm-10">
                                                        <input type="text" class="form-control" id="inputName2"
                                                            placeholder="نام">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputExperience" class="col-sm-2 control-label">شماره
                                                        تماس</label>
    
                                                    <div class="col-sm-10">
                                                        <textarea class="form-control" id="inputExperience"
                                                            placeholder="شماره تماس"></textarea>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputSkills" class="col-sm-2 control-label">آدرس
                                                    </label>
    
                                                    <div class="col-sm-10">
                                                        <input type="text" class="form-control" id="inputSkills"
                                                            placeholder="آدرس">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="col-sm-offset-2 col-sm-10">
                                                        <div class="checkbox">
                                                             <label>
                                                                <input type="checkbox"> I agree to the <a href="#">terms
                                                                    and conditions</a>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="col-sm-offset-2 col-sm-10">
                                                        {!! htmlFormSnippet() !!}
                                                        <button type="submit" class="btn btn-danger">ویرایش </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
    
                                        <div class="tab-pane" id="more_options">
                                            <form class="form-horizontal">
                                                @csrf
                                                <div class="form-group">
                                                    <label for="inputName" class="col-sm-2 control-label">نام </label>
                                                    <div class="col-sm-10">
                                                        <input type="email" class="form-control" id="inputName"
                                                            placeholder="نام">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputEmail" class="col-sm-2 control-label">نام
                                                        خانوادگی</label>
    
                                                    <div class="col-sm-10">
                                                        <input type="email" class="form-control" id="inputEmail"
                                                            placeholder="ایمیل">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputName2" class="col-sm-2 control-label">ایمیل</label>
    
                                                    <div class="col-sm-10">
                                                        <input type="text" class="form-control" id="inputName2"
                                                            placeholder="نام">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputExperience" class="col-sm-2 control-label">شماره
                                                        تماس</label>
    
                                                    <div class="col-sm-10">
                                                        <textarea class="form-control" id="inputExperience"
                                                            placeholder="شماره تماس"></textarea>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputSkills" class="col-sm-2 control-label">آدرس
                                                    </label>
    
                                                    <div class="col-sm-10">
                                                        <input type="text" class="form-control" id="inputSkills"
                                                            placeholder="آدرس">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="col-sm-offset-2 col-sm-10">
                                                        <div class="checkbox">
                                                            <label>
                                                                <input type="checkbox"> I agree to the <a href="#">terms
                                                                    and conditions</a>
                                                            </label> 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="col-sm-offset-2 col-sm-10">
                                                        {!! htmlFormSnippet() !!}
                                                        <button type="submit" class="btn btn-danger">ویرایش </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <!-- /.tab-pane -->
                                    </div>
                                    <!-- /.tab-content -->
                                </div><!-- /.card-body -->
                            </div>
                            <!-- /.nav-tabs-custom -->
                        </div>
                        <!-- /.col -->
                    </div>
                </form>
                <!-- /.row -->
            </div><!-- /.container-fluid -->
        </section>
    </div>
</template>
<script>

</script>
<style lang="">
    
</style>