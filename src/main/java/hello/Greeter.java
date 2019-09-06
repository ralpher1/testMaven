package hello;

public class Greeter{
    public String sayHello(String helloText){


	String varWord="test Hellow World!";
	//can I say private String varWord here or just string, or it doesnt matter cause its not class scope its in a funciton in java?

	if (helloText != null){
	    varWord=helloText + "added This";
	} else {
	    varWord="Hello World!";
	}

	return varWord;


    }
}
