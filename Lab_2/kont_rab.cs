using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace kr_1var
{
    class Program
    {
        enum PM_AM : uint
        { PM = 1, AM }

        static void Main(string[] args)
        {
            Console.WriteLine((int)char.MaxValue);

            string s = "-1230";
            int numVal = Int32.Parse(s);
            Console.WriteLine(numVal);


            char[,,] arr = new char[2, 2, 2];
            for (int i = 0; i < 2; i++)
                for (int j = 0; j < 2; j++)
                    for (int k = 0; k < 2; k++)
                    {
                        arr[i, j, k] = 'a';
                        Console.WriteLine($"arr[{i},{j},{k}] = " + arr[i, j, k]);
                    }

            Time time = new Time();
            time.h = 5;
            time.m = 43;
            time.s = 12;
            time.someTime = (PM_AM)1;
            Console.WriteLine(time.ToString());

            Horse horse = new Horse();
            horse.name = "Юнмун";
            Console.WriteLine("Имя лошади - " + horse.name);
            horse.Run();


            Console.ReadLine();
        }

        class Time
        {
            public uint h { get; set; }
            public uint m { get; set; }
            public uint s { get; set; }
            public PM_AM someTime;

            public override string ToString()
            {
                string ss = s.ToString();
                string sm = m.ToString();
                string sh = h.ToString();
                string some = someTime.ToString();
                string time = "Сейчас " + sh + ":" + sm + ":" + ss + " " + some;
                return time;
            }
        }
        interface IRun
        {
            void Run();
        }
        class Mammal
        {
            public string name;
        }
        class Horse : Mammal, IRun
        {
            public Horse() : base() { }
            public void Run()
            {
                Console.WriteLine("Число букв в имени лошади = "
                    + this.name.Length);
            }
        }
    }
}
namespace kr_2var
{
    class Program
    {
        enum PM_AM : uint
        { PM = 1, AM }

        static void Main(string[] args)
        {
            Console.WriteLine(double.MinValue);

            Console.WriteLine("Введите две строки");
            string s1 = Console.ReadLine();
            string s2 = Console.ReadLine();
            string s = s1 + s2;
            Console.WriteLine("Объединение этих строк - " + s);



            int[][] arrSt = new int[2][];
            arrSt[0] = new int[3];
            arrSt[1] = new int[5];

            Random rand = new Random();
            for (int i = 0; i < 3; ++i)
            {
                arrSt[0][i] = rand.Next(1, 99);
                Console.Write(arrSt[0][i] + "  ");
            }
            Console.WriteLine();

            for (int i = 0; i < 5; ++i)
            {
                arrSt[1][i] = rand.Next(1, 99);
                Console.Write(arrSt[1][i] + "  ");
            }


            Time t1 = new Time();
            Time t2 = new Time();
            t1.Minutes = 45;
            t2.Minutes = 23;
            t1.Seconds = 12;
            t2.Seconds = 2;
            if (t1 == t2) Console.WriteLine("\nt1 равно t2");
            if (t1 > t2) Console.WriteLine("\nt1 больше t2");


            Student st = new Student();
            Prepod prep = new Prepod();
            IStudy inter_prep = prep;
            st.study();
            prep.study();
            inter_prep.study();


            Console.ReadLine();
        }

        class Time
        {
            private const int hh = 4;
            public int Minutes { get; set; }
            public int Seconds { get; set; }
            public int Hours { get => hh; }

            //перегрузить операции == и < для объектов Time
            public static bool operator !=(Time a, Time b)
            {
                if (a.Minutes != b.Minutes || (a.Seconds != b.Seconds))
                    return true;
                else return false;
            }
            public static bool operator ==(Time a, Time b)
            {
                if (a != b) return false;
                else return true;
            }
            public static bool operator >(Time a, Time b)
            {
                if (a.Minutes > b.Minutes || ((a.Minutes == b.Minutes) && (a.Seconds > b.Seconds)))
                    return true;
                else return false;
            }
            public static bool operator <(Time a, Time b)
            {
                if (b > a) return true;
                else return false;
            }
        }
        interface IStudy
        {
            void study();
        }
        class Student : IStudy
        {
            public void study() =>
                Console.WriteLine("Учусь.");
        }
        class Prepod : Student, IStudy
        {
            void IStudy.study() =>
                Console.WriteLine("Учу.");
        }
    }
}
namespace kr_3var
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(Decimal.MaxValue);

            Console.WriteLine("Введите две строки: ");
            string s1 = Console.ReadLine();
            string s2 = Console.ReadLine();
            int result = String.Compare(s1, s2);

            if (result == 0)
                Console.WriteLine("Строки {0} и {1} идентичны", s1, s2);
            else
                Console.WriteLine("Строки {0} и {1} разные", s1, s2);


            string[] arr = new string[3];
            arr[0] = "один";
            arr[1] = "два";
            arr[2] = "три";
            for (int i = arr.Length; i < 0; i--)
            {
                Console.Write(arr[i] + "  ");
            }

            Month m = new Month();
            Console.WriteLine("\nОбращение к элементам массива по индексу:");
            Console.WriteLine(m[0]);
            Console.WriteLine(m[7]);
            Console.WriteLine(m[13]);

            Student st = new Student();
            st.name = "Никита";
            IDo inter_st = st;
            st.coding();
            inter_st.coding();

            Console.ReadLine();

        }
        class Month
        {
            private string[] months;
            private const int size = 12;

            public Month()
            {
                months = new string[size];
                this.months[0] = "янв";
                this.months[1] = "фев";
                this.months[2] = "март";
                this.months[3] = "апр";
                this.months[4] = "май";
                this.months[5] = "июн";
                this.months[6] = "июл";
                this.months[7] = "авг";
                this.months[8] = "сен";
                this.months[9] = "окт";
                this.months[10] = "ноя";
                this.months[11] = "дек";
            }
            public string this[int index]
            {
                get
                {
                    if (index >= 00 && index < size)
                        return $"Индексу [{index}] соответствует элемент {months[index]}.";
                    else
                        return $"Индекс [{index}] является недопустимым.";
                }
            }
        }
        interface IDo
        {
            void coding();
        }
        abstract class Programmer
        {
            public abstract void coding();
        }
        class Student : Programmer, IDo
        {
            public string name { get; set; }
            public override void coding() =>
                Console.WriteLine("Я программирую (абс.класс)");
            void IDo.coding() =>
                Console.WriteLine("Я программирую (интерфейс)");
        }
    }
}
namespace kr_4var
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(ushort.MaxValue);

            string str = "Юля_123_Чистякова";
            string sub_str = "123";
            int index = str.IndexOf(sub_str);
            if (index == -1)
                Console.WriteLine("Подстроки нет в строке");
            else
                Console.WriteLine("Подстрока содержится в строке");


            double[,] arr = new double[2, 2];
            Random rand = new Random();

            for (int i = 0; i < 2; i++)
                for (int j = 0; j < 2; j++)
                {
                    arr[i, j] = rand.Next(1, 99);
                    Console.Write(arr[i, j] + "  ");
                }

            Date d1 = new Date();
            Date d2 = new Date();
            d1.day = 1; d1.month = 7;
            d2.day = 8; d2.month = 6;
            Console.WriteLine("\nd1 эквивалентно d2? - " + d1.Equals(d2));


            Student st = new Student();
            Prepod pr = new Prepod();
            st.minus();
            st.plus();
            pr.plus();

            Console.ReadLine();
        }
        class Date
        {
            private readonly int yy = 1998;
            private int dd;
            private int mm;

            public int day { get => dd; set { dd = value; } }
            public int month { get => mm; set { mm = value; } }
            public int year { get => yy; }

            public override bool Equals(Object obj)
            {
                if (obj == null)
                    return false;
                Date d = obj as Date;
                if (d as Date == null)
                    return false;

                return (d.dd == this.dd && d.mm == this.mm);
            }
        }
        interface IGood
        {
            void plus();
        }
        interface IBad
        {
            void minus();
        }
        abstract class People { }
        class Student : People, IGood, IBad
        {
            public void plus() =>
                Console.WriteLine("Ученик складывает.");
            public void minus() =>
                Console.WriteLine("Ученик вычитает.");
        }
        class Prepod : People, IGood
        {
            public void plus() =>
                Console.WriteLine("Преподаватель складывает.");
        }
    }
}
namespace kr_5var
{
    class Program
    {
        static void Main(string[] args)
        {
            //1А.
            Console.WriteLine(System.Single.MaxValue);


            //1Б.
            string str = "Программирование";
            Console.WriteLine(str.Substring(4, 1));


            //1С.
            List<string> names = new List<string>() { "Юля", "Аня", "Наташа", "Нина" };
            foreach (string s in names)
                Console.Write(s + ", ");


            //2. Создать два объекта типа Date и сравнить их по хэш-коду
            Date d1 = new Date();
            Date d2 = new Date();
            d1.day = 12; d1.month = 10; d1.year = 2000;
            d2.day = 14; d2.month = 12; d2.year = 1996;

            Console.WriteLine($"\n\nПервая дата - {d1.day}.{d1.month}.{d1.year} год");
            Console.WriteLine($"Вторая дата - {d2.day}.{d2.month}.{d2.year} год");

            if (d1.GetHashCode() == d2.GetHashCode())
                Console.WriteLine("Хэш-коды дат равны.");
            else
                Console.WriteLine("Хэш-коды дат не равны.");


            //3. Проверить работу метода Checker
            People people = new People();
            Orator.Checker(people);



            Console.ReadLine();
        }
    }
    //2.
    partial class Date
    {
        public int day { get; set; }
        public int month { get; set; }
        public int year { get; set; }
    }


    //3.
    interface ICan
    {
        void speak();
    }
    class People : ICan
    {
        public void speak() =>
            Console.WriteLine("Я могу говорить.");
    }
    static class Orator
    {
        public static void Checker(People people)
        {
            if (people is ICan)
            {
                Console.WriteLine("\nICan поддерживается People");
                people.speak();
            }
            else
                Console.WriteLine("\nICan не поддерживается People");
        }
    }

}
namespace kr_5var
{
    //2.
    partial class Date
    {
        public override int GetHashCode()
        {
            return day + month + year;
        }
    }
}
namespace kr_6var
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(System.UInt64.MaxValue);

            string str = "Картон";
            Console.WriteLine($"Индекс первой буквы 'о' в слове {str} - " + str.IndexOf('о'));

            char[][] arrSt = new char[3][];
            arrSt[0] = new char[1] { 'a' };
            arrSt[1] = new char[2] { 'b', 'c' };
            arrSt[2] = new char[3] { 'd', 'e', 'f' };

            Console.WriteLine("\n");
            for (int i = 0; i < 1; ++i)
                Console.Write(arrSt[0][i] + "  ");

            Console.WriteLine();
            for (int i = 0; i < 2; ++i)
                Console.Write(arrSt[1][i] + "  ");

            Console.WriteLine();
            for (int i = 0; i < 3; ++i)
                Console.Write(arrSt[2][i] + "  ");



            Button b1 = new Button(100, 40);
            Button b2 = new Button(200, 36);
            bool res = b1.Equals(b2);
            Console.WriteLine("\nb1 эквивалентно b2? - " + res);
            Button.color = "синий";


            Student st = new Student();
            IThink st1 = st;
            IDo st2 = st;
            st1.Future();
            st2.Future();

            Console.ReadLine();
        }
        sealed class Button
        {
            private int heigh;
            private int width;
            public static string color = "красный";

            public Button(int h, int w)
            {
                this.heigh = h;
                this.width = w;
            }

            public override bool Equals(Object obj)
            {
                if (obj == null)
                    return false;
                Button but = obj as Button;
                if (but as Button == null)
                    return false;
                return (but.heigh == this.heigh && but.width == this.width);
            }
        }
        interface IThink
        {
            void Future();
        }
        interface IDo
        {
            void Future();
        }
        class Student : IThink, IDo
        {
            void IThink.Future() =>
                Console.WriteLine("...");
            void IDo.Future() =>
                Console.WriteLine("12345");
        }
    }
}
namespace kr_8var
{
    enum months
    { jan = 1, feb, mar, apr, may, jun, jul, aug, sept, oct, nov, dec }


    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine((int)months.jan);
            Console.WriteLine((int)months.feb);
            Console.WriteLine((int)months.mar);
            Console.WriteLine((int)months.apr);
            Console.WriteLine((int)months.may);
            Console.WriteLine((int)months.jun);
            Console.WriteLine((int)months.jul);
            Console.WriteLine((int)months.aug);
            Console.WriteLine((int)months.sept);
            Console.WriteLine((int)months.oct);
            Console.WriteLine((int)months.nov);
            Console.WriteLine((int)months.dec);

            string str = "123.345.678";
            string[] words = str.Split(new char[] { '.' });        ///разделение строки на слова
            foreach (string s in words) Console.WriteLine(s);

            int[] arr = new int[3] { 12, 24, 36 };
            string a0 = arr[0].ToString();
            string a1 = arr[1].ToString();
            string a2 = arr[2].ToString();
            Console.WriteLine(a0 + a1 + a2);


            Computer c1 = new Computer();
            Computer c2 = new Computer();
            c1.number = 3;
            c2.number = 4;
            IComparable cc1 = c1;
            int i = cc1.CompareTo(c2);


            Case cc = new Case();
            IGood cc2 = cc;
            cc.Fine();
            cc2.Fine();

            Console.ReadLine();
        }
        class Computer : IComparable
        {
            public static readonly int op = 512;
            public static int freq = 4;
            public int number;

            int IComparable.CompareTo(Object obj)
            {
                Computer c = obj as Computer;
                if (c.number == this.number)
                {
                    Console.WriteLine("Объекты равны");
                    return 0;
                }
                if (c.number > this.number)
                {
                    Console.WriteLine($"{c.number} больше чем {this.number}");
                    return 1;
                }
                else
                {
                    Console.WriteLine($"{c.number} меньше чем {this.number}");
                    return -1;
                }
            }
        }
        interface IGood
        {
            void Fine();
        }
        abstract class Something : IGood
        {
            public abstract void ItsOk();
            public void Fine() =>
                Console.WriteLine("Я в порядке (abstract class)");
            void IGood.Fine() =>
                Console.WriteLine("Я в порядке (interface)");

        }
        class Case : Something
        {
            public override void ItsOk() =>
                Console.WriteLine("Все хорошо.");
        }
    }
}
namespace kr_9var
{
    class Program
    {
        static void Main(string[] args)
        {
            int a = 56;
            int b = 24;
            string c = (a + b).ToString();
            Console.WriteLine(c);

            string str = "Happy summer!";
            string end = str.Substring(str.Length - 1, 1);
            str = str + end;
            Console.WriteLine(str);

            string[,] arr = new string[2, 3] { { "one", "two", "three" }, { "four", "five", "six" } };
            int sum = 0;
            for (int i = 0; i < 2; i++)
                for (int j = 0; j < 3; j++)
                {
                    Console.Write(arr[i, j] + "  ");
                    sum += arr[i, j].Length;
                }
            Console.WriteLine("\nОбщее число букв в массиве = " + sum);

            Point p1 = new Point();
            Point p2 = new Point();
            p1.x = 8; p1.y = 9;
            p2.x = 7; p2.y = 6;
            int res = p1.CompareTo(p2);
            if (res == 0)
                Console.WriteLine("p1 = p2");
            if (res == 1)
                Console.WriteLine("p2 > p1");
            if (res == -1)
                Console.WriteLine("p2 < p1");


            Bank bank = new Bank();
            Cassa cassa = new Cassa();
            Console.WriteLine("Count от Bank = " + bank.Count(100));
            Console.WriteLine("Count от Cassa = " + cassa.Count(100));

            Console.ReadLine();
        }
        class Point : IComparable
        {
            public int x;
            public int y;

            public int CompareTo(Object obj)
            {
                Point p = obj as Point;
                if (p.x == this.x && p.y == this.y)
                    return 0;
                if (p.x + p.y > this.x + this.y)
                    return 1;
                else return -1;
            }
        }
        interface IBank
        {
            double Count(int sum);
        }
        class Bank : IBank
        {
            public double Count(int sum)
            {
                return (sum * 0.9);
            }
        }
        class Cassa : Bank, IBank
        {
            new public double Count(int sum)
            {
                return (0.1 * base.Count(sum));
            }
        }
    }
}