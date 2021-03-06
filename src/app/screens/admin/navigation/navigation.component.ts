import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/services/app.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  userName: string = "dot";
  constructor(private appservice: AppService) {}

  ngOnInit() {
    // this.appservice.currentMessage.subscribe(
    //   newName => (this.userName = newName)
    // );
    this.userName = localStorage.getItem("username");
  }
}
