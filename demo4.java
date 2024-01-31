class Demo
{

static int a=10;

int  b=20;//Instance Variable
public static void main(String []args)
{
int x=30;
System.out.println(x);//Local Variable
System.out.println(Demo.a);//Static Variable

Demo d=new Demo();
d.b();
}
}