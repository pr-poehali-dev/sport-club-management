import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Trophy" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Sports Club Manager</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <Icon name="Users" size={16} className="mr-1" />
                247 активных членов
              </Badge>
              <Button variant="outline" size="sm">
                <Icon name="Settings" size={16} className="mr-2" />
                Настройки
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Analytics Dashboard */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Аналитика и отчетность</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Доходы месяца</CardTitle>
                <Icon name="DollarSign" className="text-primary" size={20} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">₽185,240</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+12.5%</span> к прошлому месяцу
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Посещаемость</CardTitle>
                <Icon name="TrendingUp" className="text-secondary" size={20} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-secondary">87%</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+5.2%</span> за неделю
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Новые абонементы</CardTitle>
                <Icon name="UserPlus" className="text-green-600" size={20} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">24</div>
                <p className="text-xs text-muted-foreground">
                  За последние 7 дней
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Активные тренеры</CardTitle>
                <Icon name="Users" className="text-orange-500" size={20} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-500">8</div>
                <p className="text-xs text-muted-foreground">
                  Из 10 в штате
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="BarChart3" className="mr-2 text-primary" size={20} />
                  График посещаемости
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg flex items-end justify-around p-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 bg-primary h-32 rounded-t mb-2"></div>
                    <span className="text-xs text-gray-600">Пн</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 bg-primary h-40 rounded-t mb-2"></div>
                    <span className="text-xs text-gray-600">Вт</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 bg-secondary h-48 rounded-t mb-2"></div>
                    <span className="text-xs text-gray-600">Ср</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 bg-primary h-36 rounded-t mb-2"></div>
                    <span className="text-xs text-gray-600">Чт</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 bg-secondary h-44 rounded-t mb-2"></div>
                    <span className="text-xs text-gray-600">Пт</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 bg-primary h-28 rounded-t mb-2"></div>
                    <span className="text-xs text-gray-600">Сб</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 bg-secondary h-20 rounded-t mb-2"></div>
                    <span className="text-xs text-gray-600">Вс</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="PieChart" className="mr-2 text-secondary" size={20} />
                  Популярные виды спорта
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="text-sm">Фитнес</span>
                    </div>
                    <span className="text-sm font-medium">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-secondary rounded-full"></div>
                      <span className="text-sm">Боксинг</span>
                    </div>
                    <span className="text-sm font-medium">28%</span>
                  </div>
                  <Progress value={28} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Плавание</span>
                    </div>
                    <span className="text-sm font-medium">18%</span>
                  </div>
                  <Progress value={18} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-sm">Йога</span>
                    </div>
                    <span className="text-sm font-medium">9%</span>
                  </div>
                  <Progress value={9} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="trainers" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="trainers" className="flex items-center space-x-2">
              <Icon name="Users" size={16} />
              <span>Тренеры</span>
            </TabsTrigger>
            <TabsTrigger value="calendar" className="flex items-center space-x-2">
              <Icon name="Calendar" size={16} />
              <span>Календарь</span>
            </TabsTrigger>
            <TabsTrigger value="schedule" className="flex items-center space-x-2">
              <Icon name="Clock" size={16} />
              <span>Расписание</span>
            </TabsTrigger>
            <TabsTrigger value="memberships" className="flex items-center space-x-2">
              <Icon name="CreditCard" size={16} />
              <span>Абонементы</span>
            </TabsTrigger>
          </TabsList>

          {/* Trainers Tab */}
          <TabsContent value="trainers">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl">Управление штатом тренеров</CardTitle>
                  <Button>
                    <Icon name="Plus" size={16} className="mr-2" />
                    Добавить тренера
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: "Анна Петрова", specialty: "Фитнес", status: "active", rating: 4.9, sessions: 156 },
                    { name: "Михаил Соколов", specialty: "Бокс", status: "active", rating: 4.8, sessions: 89 },
                    { name: "Елена Волкова", specialty: "Йога", status: "busy", rating: 4.7, sessions: 203 },
                    { name: "Дмитрий Козлов", specialty: "Плавание", status: "active", rating: 4.6, sessions: 124 },
                    { name: "Ольга Медведева", specialty: "Пилатес", status: "vacation", rating: 4.8, sessions: 67 },
                    { name: "Александр Орлов", specialty: "Кроссфит", status: "active", rating: 4.9, sessions: 145 }
                  ].map((trainer, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                              {trainer.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <h3 className="font-semibold text-sm">{trainer.name}</h3>
                              <p className="text-xs text-gray-600">{trainer.specialty}</p>
                            </div>
                          </div>
                          <Badge 
                            variant={trainer.status === 'active' ? 'default' : trainer.status === 'busy' ? 'secondary' : 'outline'}
                            className={
                              trainer.status === 'active' 
                                ? 'bg-green-100 text-green-800' 
                                : trainer.status === 'busy' 
                                ? 'bg-orange-100 text-orange-800' 
                                : 'bg-gray-100 text-gray-800'
                            }
                          >
                            {trainer.status === 'active' ? 'Активен' : trainer.status === 'busy' ? 'Занят' : 'Отпуск'}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Icon name="Star" size={12} className="text-yellow-500 fill-current" />
                            <span>{trainer.rating}</span>
                          </div>
                          <span>{trainer.sessions} сессий</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Calendar Tab */}
          <TabsContent value="calendar">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl">Календарь соревнований и мероприятий</CardTitle>
                  <Button>
                    <Icon name="Plus" size={16} className="mr-2" />
                    Добавить событие
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Чемпионат по боксу",
                      date: "15 августа 2024",
                      type: "competition",
                      participants: 24,
                      status: "upcoming"
                    },
                    {
                      title: "Мастер-класс по йоге",
                      date: "22 августа 2024",
                      type: "workshop",
                      participants: 15,
                      status: "registration"
                    },
                    {
                      title: "Соревнования по плаванию",
                      date: "5 сентября 2024",
                      type: "competition",
                      participants: 32,
                      status: "upcoming"
                    },
                    {
                      title: "День открытых дверей",
                      date: "12 сентября 2024",
                      type: "event",
                      participants: 0,
                      status: "planning"
                    }
                  ].map((event, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          event.type === 'competition' ? 'bg-primary/10 text-primary' :
                          event.type === 'workshop' ? 'bg-secondary/10 text-secondary' :
                          'bg-green-100 text-green-600'
                        }`}>
                          <Icon name={
                            event.type === 'competition' ? 'Trophy' :
                            event.type === 'workshop' ? 'BookOpen' :
                            'Calendar'
                          } size={20} />
                        </div>
                        <div>
                          <h3 className="font-semibold">{event.title}</h3>
                          <p className="text-sm text-gray-600">{event.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-sm text-gray-500">
                          {event.participants > 0 ? `${event.participants} участников` : 'Планируется'}
                        </div>
                        <Badge variant={
                          event.status === 'upcoming' ? 'default' :
                          event.status === 'registration' ? 'secondary' :
                          'outline'
                        }>
                          {event.status === 'upcoming' ? 'Скоро' :
                           event.status === 'registration' ? 'Регистрация' :
                           'Планируется'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Расписание и управление тренировками</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-8 gap-2 mb-4">
                  <div className="font-semibold text-center py-2">Время</div>
                  <div className="font-semibold text-center py-2">Пн</div>
                  <div className="font-semibold text-center py-2">Вт</div>
                  <div className="font-semibold text-center py-2">Ср</div>
                  <div className="font-semibold text-center py-2">Чт</div>
                  <div className="font-semibold text-center py-2">Пт</div>
                  <div className="font-semibold text-center py-2">Сб</div>
                  <div className="font-semibold text-center py-2">Вс</div>
                  
                  {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'].map((time, timeIndex) => (
                    <>
                      <div key={`time-${timeIndex}`} className="text-sm text-gray-500 py-2 text-center">{time}</div>
                      {[0, 1, 2, 3, 4, 5, 6].map((day) => (
                        <div key={`${timeIndex}-${day}`} className="border border-gray-200 min-h-[40px] p-1 text-xs">
                          {(timeIndex === 2 && day === 1) && (
                            <div className="bg-primary/20 text-primary p-1 rounded text-center">
                              Фитнес
                            </div>
                          )}
                          {(timeIndex === 3 && day === 2) && (
                            <div className="bg-secondary/20 text-secondary p-1 rounded text-center">
                              Бокс
                            </div>
                          )}
                          {(timeIndex === 4 && day === 3) && (
                            <div className="bg-green-100 text-green-600 p-1 rounded text-center">
                              Йога
                            </div>
                          )}
                          {(timeIndex === 5 && day === 0) && (
                            <div className="bg-orange-100 text-orange-600 p-1 rounded text-center">
                              Плавание
                            </div>
                          )}
                        </div>
                      ))}
                    </>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Memberships Tab */}
          <TabsContent value="memberships">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl">Система управления абонементами</CardTitle>
                  <Button>
                    <Icon name="Plus" size={16} className="mr-2" />
                    Новый абонемент
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <Card className="border-2 border-primary/20">
                    <CardHeader className="text-center">
                      <CardTitle className="text-primary">Базовый</CardTitle>
                      <div className="text-2xl font-bold">₽2,500</div>
                      <p className="text-sm text-gray-600">в месяц</p>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-green-500" />
                        <span className="text-sm">Тренажерный зал</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-green-500" />
                        <span className="text-sm">Групповые занятия</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="X" size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-400">Персональный тренер</span>
                      </div>
                      <div className="pt-4">
                        <Badge variant="secondary">47 активных</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-secondary/20">
                    <CardHeader className="text-center">
                      <CardTitle className="text-secondary">Стандарт</CardTitle>
                      <div className="text-2xl font-bold">₽4,200</div>
                      <p className="text-sm text-gray-600">в месяц</p>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-green-500" />
                        <span className="text-sm">Все базовые услуги</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-green-500" />
                        <span className="text-sm">Бассейн</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-green-500" />
                        <span className="text-sm">2 занятия с тренером</span>
                      </div>
                      <div className="pt-4">
                        <Badge variant="secondary">89 активных</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-orange-200">
                    <CardHeader className="text-center">
                      <CardTitle className="text-orange-600">Премиум</CardTitle>
                      <div className="text-2xl font-bold">₽6,800</div>
                      <p className="text-sm text-gray-600">в месяц</p>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-green-500" />
                        <span className="text-sm">Безлимитный доступ</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-green-500" />
                        <span className="text-sm">Персональный тренер</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-green-500" />
                        <span className="text-sm">Спа и массаж</span>
                      </div>
                      <div className="pt-4">
                        <Badge variant="secondary">34 активных</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Memberships */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Недавние продления</h3>
                  {[
                    { name: "Мария Кузнецова", plan: "Стандарт", renewalDate: "20.07.2024", status: "renewed" },
                    { name: "Алексей Попов", plan: "Премиум", renewalDate: "22.07.2024", status: "pending" },
                    { name: "Наталья Смирнова", plan: "Базовый", renewalDate: "18.07.2024", status: "expired" },
                    { name: "Игорь Васильев", plan: "Стандарт", renewalDate: "25.07.2024", status: "renewed" }
                  ].map((member, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="font-medium">{member.name}</h4>
                          <p className="text-sm text-gray-600">{member.plan} • {member.renewalDate}</p>
                        </div>
                      </div>
                      <Badge variant={
                        member.status === 'renewed' ? 'default' :
                        member.status === 'pending' ? 'secondary' :
                        'destructive'
                      }>
                        {member.status === 'renewed' ? 'Продлен' :
                         member.status === 'pending' ? 'Ожидает' :
                         'Истек'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;