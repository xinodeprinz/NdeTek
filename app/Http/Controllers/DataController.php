<?php

namespace App\Http\Controllers;

use App\Models\BlogCategory;
use App\Models\Category;
use App\Models\MainCategory;
use App\Models\Paper;
use Illuminate\Http\Request;

class DataController extends Controller
{
    public function storeMainCategories()
    {
        $data = [
            ['name' => 'universities'],
            ['name' => 'gce'],
            ['name' => 'concours'],
            ['name' => 'french exams'],
        ];

        foreach ($data as $d) {
            MainCategory::create($d);
        }

        return 1;
    }

    public function storeCategories()
    {
        $data = [
            ['name' => 'GCE Advanced Level', 'image' => 'images/categories/gce.jpg', 'main_category_id' => 2, 'uri' => 'papers/gce_al/'],
            ['name' => 'GCE Ordinary Level', 'image' => 'images/categories/gce.jpg', 'main_category_id' => 2, 'uri' => 'papers/gce_ol/'],
            ['name' => 'COT Buea', 'image' => 'images/categories/cot.jpg', 'main_category_id' => 3, 'uri' => 'papers/concours/'],
            ['name' => 'FET Buea', 'image' => 'images/categories/fet.jpg', 'main_category_id' => 3, 'uri' => 'papers/concours/'],
            ['name' => 'ENS (HTTC)', 'image' => 'images/categories/ens.jpg', 'main_category_id' => 3, 'uri' => 'papers/concours/'],
            ['name' => 'ENSET (HTTTC)', 'image' => 'images/categories/enset.jpg', 'main_category_id' => 3, 'uri' => 'papers/concours/'],
            ['name' => 'Polythenic', 'image' => 'images/categories/polythecnic.jpg', 'main_category_id' => 3, 'uri' => 'papers/concours/'],
            ['name' => 'COLTECH', 'image' => 'images/categories/coltech.jpg', 'main_category_id' => 3, 'uri' => 'papers/concours/'],
            ['name' => 'Medicine/CUSS/FHS', 'image' => 'images/categories/medicine.jpg', 'main_category_id' => 3, 'uri' => 'papers/concours/'],
            ['name' => 'University of Buea', 'image' => 'images/categories/buea.jpg', 'main_category_id' => 1, 'uri' => 'papers/buea/'],
            ['name' => 'University of Bamenda', 'image' => 'images/categories/bamenda.jpg', 'main_category_id' => 1, 'uri' => 'papers/bamenda/'],
            ['name' => 'University of Dschang', 'image' => 'images/categories/dschang.jpg', 'main_category_id' => 1, 'uri' => 'papers/dschang/'],
            ['name' => 'University of Douala', 'image' => 'images/categories/douala.jpg', 'main_category_id' => 1, 'uri' => 'papers/douala/'],
            ['name' => 'University of Maroua', 'image' => 'images/categories/maroua.jpg', 'main_category_id' => 1, 'uri' => 'papers/maroua/'],
            ['name' => 'University of Ngaoundere', 'image' => 'images/categories/ngaoundere.jpg', 'main_category_id' => 1, 'uri' => 'papers/ngaoundere/'],
            ['name' => 'University of Yaounde 1', 'image' => 'images/categories/yaounde1.jpg', 'main_category_id' => 1, 'uri' => 'papers/yaounde1/'],
            ['name' => 'University of Yaounde 2', 'image' => 'images/categories/yaounde2.jpg', 'main_category_id' => 1, 'uri' => 'papers/yaounde2/'],
            ['name' => 'Others', 'image' => 'images/categories/others.jpg', 'main_category_id' => 1, 'uri' => 'papers/others/'],
            ['name' => 'Baccalauret', 'image' => 'images/categories/french.jpg', 'main_category_id' => 10, 'uri' => 'papers/frech/'],
            ['name' => 'Probatoire', 'image' => 'images/categories/french.jpg', 'main_category_id' => 10, 'uri' => 'papers/french/'],
            ['name' => 'Cab', 'image' => 'images/categories/french.jpg', 'main_category_id' => 10, 'uri' => 'papers/french/'],
        ];

        foreach ($data as $d) {
            Category::create($d);
        }

        return 1;
    }

    public function storePapers()
    {
        $data = [

            ['name' => 'ACCESS NETWORKS EEC305 2020.pdf', 'category_id' => 10],
            ['name' => 'analog electronics EEC205 2018 ca.pdf', 'category_id' => 10],
            ['name' => 'circuit analysis 1 EEC231 2020 ca.pdf', 'category_id' => 10],
            ['name' => 'circuit analysis EEC207 - fundamentals of electrical engineering EEC223 18 ca.pdf', 'category_id' => 10],
            ['name' => 'circuit analysis EEC207 2018 ca.pdf', 'category_id' => 10],
            ['name' => 'computer for business CEC207 2018 ca.pdf', 'category_id' => 10],
            ['name' => 'COMPUTER NETWORK PROTOCOLS CEC322 2020.pdf', 'category_id' => 10],
            ['name' => 'COMPUTER WIRELESS COMMUNICATION EEC405 2020.pdf', 'category_id' => 10],
            ['name' => 'DIGITAL ELECTRONIC LABORATORY EEC302 2020.pdf', 'category_id' => 10],
            ['name' => 'electrical power transmission and distribution EEC342 2020 ca.pdf', 'category_id' => 10],
            ['name' => 'ENG101 2014.pdf', 'category_id' => 10],
            ['name' => 'ENG101 2018.pdf', 'category_id' => 10],
            ['name' => 'ENG101 2019_ca.pdf', 'category_id' => 10],
            ['name' => 'ENG102 2020.pdf', 'category_id' => 10],
            ['name' => 'FRE101 past questions.pdf', 'category_id' => 10],
            ['name' => 'INTRODUCTION TO CLOUD COMPUTING CEC315 2020.pdf', 'category_id' => 10],
            ['name' => 'INTRODUCTION TO NETWORKING AND SECURITY CEC335 2020.pdf', 'category_id' => 10],
            ['name' => 'MAT207 Tutorial Sheet 4.pdf', 'category_id' => 10],
            ['name' => 'materials science EEC213 2018 ca.pdf', 'category_id' => 10],
            ['name' => 'mathematics 1 EEC209 2018 ca.pdf', 'category_id' => 10],
            ['name' => 'mathematics 1 EEC209 tutorials.pdf', 'category_id' => 10],
            ['name' => 'MATHEMATICS 3 COT305 2019.pdf', 'category_id' => 10],
            ['name' => 'physics 1 EEC211 2018 ca.pdf', 'category_id' => 10],
            ['name' => 'PHYSICS 1 EEC211 2018.pdf', 'category_id' => 10],
            ['name' => 'physics 1 EEC211 tutorial.pdf', 'category_id' => 10],
            ['name' => 'programming 1 CEC213 2019 ca.pdf', 'category_id' => 10],
            ['name' => 'PROGRAMMING 1 CEC213 2019.pdf', 'category_id' => 10],
            ['name' => 'programming with uml CEC321 2020 ca.pdf', 'category_id' => 10],
            ['name' => 'PROGRAMMING WITH UML CEC321 2020.pdf', 'category_id' => 10],
            ['name' => 'RADIO COMMUNICATIONS EEC319 2020.pdf', 'category_id' => 10],
            ['name' => 'SIGNALS AND SYSTEMS 2018.pdf', 'category_id' => 10],


            ['name' => 'COT English Proficiency 2019.pdf', 'category_id' => 3],
            ['name' => 'COT Mathematics paper year 1 2019 Eng.pdf', 'category_id' => 3],
            ['name' => 'COT Physics paper year 1 2019 Eng.pdf', 'category_id' => 3],
            ['name' => 'COT Third year Electrical technology speciality 2019.pdf', 'category_id' => 3],
            ['name' => 'COT Third year Telecommunications 2019.pdf', 'category_id' => 3],
            ['name' => 'FET 2017 mathematics paper entrance english.pdf', 'category_id' => 4],
            ['name' => 'Past question Mathematics FET 2018.pdf', 'category_id' => 4],
            ['name' => 'Past question Mathematics FET 2019.pdf', 'category_id' => 4],
            ['name' => 'Past question Physics FET 2018.pdf', 'category_id' => 4],
            ['name' => 'Past question Physics FET 2019.pdf', 'category_id' => 4],
            ['name' => 'past questions COT Buea 2017.pdf', 'category_id' => 3],
            ['name' => 'past questions COT Buea year 1 2018.pdf', 'category_id' => 3],


            ['name' => 'Biology 1 2018 .pdf', 'category_id' => 1],
            ['name' => 'Biology 1 2019.pdf', 'category_id' => 1],
            ['name' => 'biology 2 2016.pdf', 'category_id' => 1],
            ['name' => 'Biology 2017.pdf', 'category_id' => 1],
            ['name' => 'Biology paper 2 2019.pdf', 'category_id' => 1],
            ['name' => 'CHEMISTRY 1 2018.pdf', 'category_id' => 1],
            ['name' => 'Chemistry 1 2019.pdf', 'category_id' => 1],
            ['name' => 'CHEMISTRY 2 2018.pdf', 'category_id' => 1],
            ['name' => 'Chemistry paper 2 2018.pdf', 'category_id' => 1],
            ['name' => 'Computer science 3 2019.pdf', 'category_id' => 1],
            ['name' => 'Computer Science paper 2 2018.pdf', 'category_id' => 1],
            ['name' => 'Computer Science paper 2 2019.pdf', 'category_id' => 1],
            ['name' => 'Economics 1 2019.pdf', 'category_id' => 1],
            ['name' => 'Economics paper 2 2019.pdf', 'category_id' => 1],
            ['name' => 'ENGLISH 1 2019.pdf', 'category_id' => 1],
            ['name' => 'french 1 2019.pdf', 'category_id' => 1],
            ['name' => 'further Mathematics paper 2 2019.pdf', 'category_id' => 1],
            ['name' => 'further Mathematics paper 3 2019.pdf', 'category_id' => 1],
            ['name' => 'GCE ALevel Further maths 1 2019.pdf', 'category_id' => 1],
            ['name' => 'geography paper 1 2019.pdf', 'category_id' => 1],
            ['name' => 'Geography paper 2 2019.pdf', 'category_id' => 1],
            ['name' => 'GEOLOGY 2016.pdf', 'category_id' => 1],
            ['name' => 'History 1 2019.pdf', 'category_id' => 1],
            ['name' => 'HISTORY 2 2019.pdf', 'category_id' => 1],
            ['name' => 'HISTORY 3 2019.pdf', 'category_id' => 1],
            ['name' => 'JUNE 2018 CHEMISTRY P2.pdf', 'category_id' => 1],
            ['name' => 'literature 1 2019.pdf', 'category_id' => 1],
            ['name' => 'literature 3 2019.pdf', 'category_id' => 1],
            ['name' => 'physics 1 2019.pdf', 'category_id' => 1],
            ['name' => 'physics 2 2019.pdf', 'category_id' => 1],
            ['name' => 'Pure Mathematics With Mechanics 2 2019.pdf', 'category_id' => 1],
            ['name' => 'pure Maths With Statistics 2 2019.pdf', 'category_id' => 1],
        ];

        foreach ($data as $d) {
            Paper::create($d);
        }

        return 1;
    }

    public function storeBlogCategories()
    {
        $data = [
            ['name' => 'NdeTek'],
            ['name' => 'Technology'],
            ['name' => 'Football'],
        ];

        foreach ($data as $d) {
            BlogCategory::create($d);
        }

        return 1;
    }

    public function getMainCategoryNames()
    {
        $main_cats = MainCategory::all();
        $data = [];
        foreach ($main_cats as $c) {
            $cat = $c->categories()->first();
            $data[] = ['main' => $c->name, 'cat' => $cat->name];
        }
        // $cat
        return $data;
    }
}