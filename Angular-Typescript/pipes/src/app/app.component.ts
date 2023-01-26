import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre: string = "Angeles";
  iva: number = 0.21;
  racional: number = 0.324567;
  arrayNumeros: any[] = [
    { numero: 1, tipo: 'impar' },
    { numero: 2, tipo: 'par' },
    { numero: 3, tipo: 'impar' },
    { numero: 4, tipo: 'par' },
    { numero: 5, tipo: 'impar' }

  ]
  precio: number = 12345;
  fecha: Date = new Date();
  birthday: string = '1976-04-09';
  pi: number = Math.PI;
  arrAnimales: string[] = ['Leon', 'Gato', 'Periquito', 'Mofeta'];
  texto: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, vero fuga tempore, eum iusto sequi illum deleniti reiciendis optio libero quas? Praesentium ipsa pariatur inventore, voluptate est eos eius ut sequi repudiandae unde maiores consectetur facilis reprehenderit ad quae? Cum ex, fugit natus aperiam dolorum facilis necessitatibus maxime fuga dignissimos magni? Molestiae eum, cum ipsam ullam aperiam repudiandae dolorum ab sequi atque quia ratione suscipit, amet optio rem excepturi corporis quis expedita consequatur. Eos officiis consequatur nam hic rem id accusantium, error laudantium similique! Molestias provident aliquam fugiat minus blanditiis nobis expedita consequatur sed sint iure dicta tempore esse quam, magni ipsam mollitia id enim cupiditate sequi illum eligendi! Voluptatum doloribus ex molestias ut consequatur quia, nostrum porro sapiente. Incidunt architecto distinctio reiciendis! Aspernatur aliquam velit nobis beatae odio neque? Molestias nobis similique quis dolorem reiciendis adipisci in doloribus aliquid asperiores eaque maiores, perferendis, mollitia dolorum ipsa voluptate veritatis ipsam dolor, animi non pariatur voluptas! Sapiente quis iusto cum obcaecati perspiciatis aliquid quisquam, officia suscipit illo, harum nesciunt beatae exercitationem animi dolorum voluptates ratione? Natus earum ipsa est dicta temporibus iure modi eos asperiores doloribus ducimus tempore blanditiis et eum numquam rem, perferendis laborum facilis. Quas sed accusantium nihil pariatur quos a, molestiae qui sint ex, facere in! Suscipit provident amet ipsum consectetur quam laboriosam eos sint aspernatur. Voluptate, veritatis impedit a, reiciendis laboriosam alias tempore nesciunt repudiandae, amet qui asperiores. Ducimus reiciendis illum nostrum eaque, quo quos aspernatur corporis, nemo minus possimus ab ut vero totam commodi pariatur quidem beatae a impedit? Sunt rerum voluptate, neque facilis unde omnis vero amet voluptatem optio facere similique dolores error laudantium voluptatum veritatis ullam est, nihil velit accusantium fuga cupiditate porro architecto quos? Nam iusto sapiente amet magni. At quos nesciunt odio voluptatibus reiciendis blanditiis tempora harum explicabo. Rerum odio ipsum veritatis!"

}
