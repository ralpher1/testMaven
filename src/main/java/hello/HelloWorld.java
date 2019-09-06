//testingng for now

package hello;

public class HelloWorld {

  public static void main(String[] args){
      Greeter greeter = new Greeter();

      String argString;
      
      if (args.length>0){
          argString=args[0];
      } else {
          argString=null;
      }

      System.out.println(greeter.sayHello(argString));
      // System.out.println(argString);
     
    }


}



