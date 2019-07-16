import { Component } from '@angular/core';
import {Post} from "./post";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts= [
    new Post("Mon premier post",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    0),

    new Post("Mon deuxième post",
    "Nullam vehicula ipsum a arcu cursus. Non curabitur gravida arcu ac tortor dignissim convallis. " +
    "Porttitor rhoncus dolor purus non. Nulla facilisi etiam dignissim diam quis enim lobortis. " +
    "Commodo quis imperdiet massa tincidunt nunc pulvinar. Cras sed felis eget velit aliquet sagittis id consectetur purus.",
    5),

    new Post("Encore un post",
    "Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. " +
    "Proin fermentum leo vel orci porta non. Lectus urna duis convallis convallis tellus id interdum. " +
    "Arcu risus quis varius quam quisque id diam. Varius morbi enim nunc faucibus a. " +
    "Sit amet porttitor eget dolor morbi.",
    -3)];



}
