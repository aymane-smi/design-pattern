<?php
    class Person{
        private $name;
        private $nationality;
        private $canModify;

        public function __construct($name, $nationality, $canModify){
            $this->name = $name;
            $this->nationality = $nationality;
            $this->canModify = $canModify;
        }

        public function getName(){
            return $this->name;
        }

        public function getNationality(){
        return $this->nationality;
        }

        public function getCanModify(){
        return $this->canModify;
        }

        public function setName($name){
        $this->name = $name;
        }

        public function setNationality($nationality){
        $this->nationality = $nationality;
        }

        public function setCanModify($canModify){
        $this->canModify = $canModify;
        }
    }

    class PersonProxy{
        private $person;

        public function __construct($person){
            $this->person = $person;
        }

        public function getName(){
        echo "getting the name of the person";
        return $this->person->getName();
        }

        public function getNationality(){
        echo "getting the nationality of the person";
        return $this->person->getNationality();
        } 

        public function getCanModify(){
        echo "getting the value of canModify of the person";
        return $this->person->getCanModify();
        }

        public function setName($name){
        echo "setting the name of the person";
        $this->person->setName($name);
        }

        public function setNationality($nationality){
        echo "setting the nationality of the person";
        $this->person->setNationality($nationality);
        } 

        public function setCanModify($canModify){
            if(!$this->person->getCanModify())
            echo "the person with the name $this->person->getName() cannot be modified!";
            else{
            echo "set the prop(canModify) of '$this->person->getName() with value:$canModify";
            $this->person->setCanModify($canModify);
            }
        }
    }
?>