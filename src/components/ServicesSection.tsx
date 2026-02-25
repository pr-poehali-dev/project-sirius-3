import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Send, MessageSquare, Bot, Shield, BarChart3 } from "lucide-react"

const services = [
  {
    icon: Bot,
    title: "Мастер ассистента",
    description:
      "Настраивайте логику и стиль ответов блоками — без длинных промптов. Задайте тон, ограничения, сценарии и быстро протестируйте прямо в кабинете.",
  },
  {
    icon: Globe,
    title: "Веб‑виджет",
    description:
      "Вставьте один скрипт — и чат появится на сайте. Настройте цвет, позицию, тексты и разрешённые домены. Авто- и ручной режим показа.",
  },
  {
    icon: Send,
    title: "Telegram‑бот",
    description:
      "Подключите токен — и бот начнёт отвечать пользователям. Все диалоги видны в инбоксе, менеджер подключается одним кликом.",
  },
  {
    icon: MessageSquare,
    title: "Единый инбокс",
    description:
      "Все обращения из виджета и Telegram — в одном окне. История, поиск, статусы и быстрое подключение оператора без потери контекста.",
  },
  {
    icon: Shield,
    title: "Контроль доступа",
    description:
      "Разрешайте показ виджета только на нужных доменах. Удобно для агентств, которые настраивают ассистентов для разных клиентов.",
  },
  {
    icon: BarChart3,
    title: "Аналитика",
    description:
      "Смотрите динамику обращений, эскалации на оператора, расход токенов и стоимость — и понимаете, где ассистент реально экономит время.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Возможности платформы
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Всё для умной <span className="text-primary">поддержки клиентов</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          AI закрывает типовые вопросы, оператор подключается только когда это реально нужно — без потери истории и контекста.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
