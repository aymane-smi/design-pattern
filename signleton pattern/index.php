<?php 
    class Counter{
        private $counter = 0;
        private static $instance = null;
        public static function getInstance(){
            if(self::$instance == null)
                self::$instance = new self();
            return self::$instance;
        }

        private function __construct(){}

        public function increment(){
            return ++$this->counter;
        }

        public function decrement(){
            return --$this->counter;
        }
    }

    $tmp1 = Counter::getInstance();
    $tmp2 = Counter::getInstance();

    echo $tmp1->increment();
    //1
    echo $tmp2->increment();
    //2
?>