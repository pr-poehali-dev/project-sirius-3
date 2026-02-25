import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Send, MessageSquare, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Веб‑виджет",
    category: "Канал",
    description:
      "Подключение к сайту или продукту за 1 минуту. Настройте цвет, позицию, тексты и разрешённые домены. Авто- и ручной режим показа.",
    tags: ["Защита доменов", "Цвет и позиция", "Авто‑показ"],
    link: "#contact",
    linkText: "Подробнее →",
  },
  {
    icon: Send,
    title: "Telegram‑бот",
    category: "Канал",
    description:
      "Подключаете токен — и бот начинает отвечать пользователям. Все диалоги видны в инбоксе, статус бота в интерфейсе.",
    tags: ["Быстрое подключение", "Единый инбокс", "Статус бота"],
    link: "#contact",
    linkText: "Как подключить →",
  },
  {
    icon: MessageSquare,
    title: "Единый чат",
    category: "Инбокс",
    description:
      "Все диалоги из всех каналов в одном месте. История, поиск, статусы и подключение менеджера без потери контекста.",
    tags: ["История диалогов", "Поиск", "Контекст сохраняется"],
    link: "#contact",
    linkText: "Попробовать →",
  },
  {
    icon: BarChart3,
    title: "Аналитика и расходы",
    category: "Управление",
    description:
      "Смотрите динамику обращений, эскалации на оператора, токены и стоимость. Понимаете, где ассистент реально экономит время.",
    tags: ["Токены и стоимость", "Эскалации", "Динамика"],
    link: "#contact",
    linkText: "Узнать больше →",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Что внутри платформы</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Всё построено вокруг трёх вещей: ассистент, каналы и диалоги. Ниже — ключевой функционал без воды.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group overflow-hidden border hover:border-primary shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden bg-primary/5 flex items-center justify-center" style={{ height: "200px" }}>
                <feature.icon className="h-24 w-24 text-primary/20 group-hover:text-primary/40 transition-colors duration-500 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                    onClick={() => { const el = document.getElementById('contact'); el?.scrollIntoView({ behavior: 'smooth' }) }}
                  >
                    {feature.linkText}
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{feature.category}</p>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{feature.description}</p>
                <div className="flex flex-wrap gap-2">
                  {feature.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
