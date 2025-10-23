import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'catalog' | 'about' | 'contact'>('home');

  const books = [
    {
      id: 1,
      title: 'Конвой канкер',
      author: 'Кохар Румана Гурешиуна',
      price: '200₽',
      image: 'https://v3b.fal.media/files/b/tiger/pIF49EH40F4YOhQUZoyxe_output.png',
      tag: 'Новинка'
    },
    {
      id: 2,
      title: 'Тихие страницы',
      author: 'Анна Морозова',
      price: '350₽',
      image: 'https://v3b.fal.media/files/b/tiger/pIF49EH40F4YOhQUZoyxe_output.png',
      tag: 'Бестселлер'
    },
    {
      id: 3,
      title: 'Осенний роман',
      author: 'Дмитрий Соколов',
      price: '280₽',
      image: 'https://v3b.fal.media/files/b/tiger/pIF49EH40F4YOhQUZoyxe_output.png',
      tag: 'Новинка'
    },
    {
      id: 4,
      title: 'Истории у камина',
      author: 'Елена Светлова',
      price: '420₽',
      image: 'https://v3b.fal.media/files/b/tiger/pIF49EH40F4YOhQUZoyxe_output.png',
      tag: 'Бестселлер'
    },
    {
      id: 5,
      title: 'Весенние надежды',
      author: 'Павел Зимин',
      price: '310₽',
      image: 'https://v3b.fal.media/files/b/tiger/pIF49EH40F4YOhQUZoyxe_output.png',
      tag: 'Новинка'
    },
    {
      id: 6,
      title: 'Лунный свет',
      author: 'Мария Каменская',
      price: '390₽',
      image: 'https://v3b.fal.media/files/b/tiger/pIF49EH40F4YOhQUZoyxe_output.png',
      tag: 'Бестселлер'
    }
  ];

  const navigation = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'catalog', label: 'Каталог', icon: 'BookOpen' },
    { id: 'about', label: 'В магазине', icon: 'BookMarked' },
    { id: 'contact', label: 'Контакты', icon: 'Mail' }
  ];

  const HomePage = () => (
    <div className="space-y-16">
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
          Цветрай каскей
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Уютный книжный магазин для ценителей качественной литературы
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => setCurrentPage('catalog')}>
          Перейти в каталог
          <Icon name="ArrowRight" className="ml-2" size={20} />
        </Button>
      </section>

      <section className="px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-primary">Новинки</h2>
          <Icon name="Sparkles" size={28} className="text-accent" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.filter(book => book.tag === 'Новинка').map((book) => (
            <Card key={book.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] bg-accent/20 relative overflow-hidden">
                <img 
                  src={book.image} 
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                  {book.tag}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-1">{book.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{book.author}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-primary">{book.price}</span>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Купить
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-primary">Бестселлеры</h2>
          <Icon name="TrendingUp" size={28} className="text-accent" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.filter(book => book.tag === 'Бестселлер').map((book) => (
            <Card key={book.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] bg-accent/20 relative overflow-hidden">
                <img 
                  src={book.image} 
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                  {book.tag}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-1">{book.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{book.author}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-primary">{book.price}</span>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Купить
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );

  const CatalogPage = () => (
    <div className="px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-8">Каталог книг</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <Card key={book.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-[3/4] bg-accent/20 relative overflow-hidden">
              <img 
                src={book.image} 
                alt={book.title}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                {book.tag}
              </Badge>
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-1">{book.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{book.author}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-primary">{book.price}</span>
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Купить
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="px-4 py-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-6">В магазине</h1>
      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          Добро пожаловать в наш уютный книжный магазин! Мы создали пространство, 
          где каждый любитель чтения может найти что-то особенное.
        </p>
        <p>
          Наша коллекция тщательно подобрана — от современных бестселлеров до 
          редких изданий классической литературы. Мы верим, что каждая книга 
          находит своего читателя.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Icon name="BookOpen" size={32} className="text-primary" />
              <h3 className="text-xl font-bold">Широкий выбор</h3>
            </div>
            <p className="text-muted-foreground">
              Более 1000 наименований на любой вкус
            </p>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Icon name="Coffee" size={32} className="text-primary" />
              <h3 className="text-xl font-bold">Уютная атмосфера</h3>
            </div>
            <p className="text-muted-foreground">
              Комфортное пространство для выбора книг
            </p>
          </Card>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="px-4 py-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-8">Контакты</h1>
      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <Icon name="MapPin" size={24} className="text-primary mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Адрес</h3>
              <p className="text-muted-foreground">
                г. Москва, ул. Книжная, д. 15
              </p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <Icon name="Phone" size={24} className="text-primary mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Телефон</h3>
              <p className="text-muted-foreground">
                +7 (495) 123-45-67
              </p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <Icon name="Mail" size={24} className="text-primary mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-muted-foreground">
                info@bookshop.ru
              </p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <Icon name="Clock" size={24} className="text-primary mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Режим работы</h3>
              <p className="text-muted-foreground">
                Пн-Вс: 10:00 - 21:00
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <Icon name="BookMarked" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">Цветрай каскей</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                    currentPage === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-accent'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'catalog' && <CatalogPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      <footer className="border-t border-border bg-card mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="BookMarked" size={24} className="text-primary" />
              <span className="font-semibold text-primary">Цветрай каскей</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 Книжный магазин. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
