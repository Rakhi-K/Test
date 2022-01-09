import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  //**Displaying the data  with "SORTING and PAGINATION INCLUDED"****/

  gridApi = ""

  gridColumnApi = ""

  columnDefs = [
    {
      headerName: "Login Name",
      field: "login",
      width: 160,
      sortable: true,
      filter: true
    },
    {
      headerName: "ID",
      field: "id",
      width: 90,
      sortable: true,
      filter: true
    },
    {
      headerName: "Node Id",
      field: "node_id",
      width: 200,
      sortable: true,
      filter: true


    },
    {
      headerName: "Avatar Url",
      field: "avatar_url",
      width: 350,
      sortable: true,
      filter: true

    },
    {
      headerName: "Gravatar Id",
      field: "gravatar_id",
      width: 90
    },
    {
      headerName: "Url",
      field: "url",
      width: 350,
      sortable: true,
      filter: true

    },
    {
      headerName: "HTML Url",
      field: "html_url",
      width: 250,
      sortable: true,
      filter: true

    },
    {
      headerName: "Followers Url",
      field: "followers_url",
      width: 390,
      sortable: true,
      filter: true

    },
    {
      headerName: "Following Url",
      field: "following_url",
      width: 450,
      sortable: true,
      filter: true

    },
    {
      headerName: "Gists Url",
      field: "gists_url",
      width: 380,
      sortable: true,
      filter: true
    },
    {
      headerName: "Starred url",
      field: "starred_url",
      width: 490,
      sortable: true,
      filter: true
    },
    {
      headerName: "Subscriptions Url",
      field: "subscriptions_url",
      width: 480,
      sortable: true,
      filter: true
    },
    {
      headerName: "Organizations Url",
      field: "organizations_url",
      width: 380,
      sortable: true,
      filter: true
    },
    {
      headerName: "Repos Url",
      field: "repos_url",
      width: 350,
      sortable: true,
      filter: true
    },
    {
      headerName: "Events Url",
      field: "events_url",
      width: 420,
      sortable: true,
      filter: true
    },
    {
      headerName: "Received Events Url",
      field: "received_events_url",
      width: 480,
      sortable: true,
      filter: true
    },
    {
      headerName: "Type",
      field: "type",
      width: 150,
      sortable: true,
      filter: true

    },
    {
      headerName: "Site Admin",
      field: "site_admin",
      width: 150,
      sortable: true,
      filter: true
    }
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.http
      .get("https://api.github.com/users")
      .subscribe(data => {
        params.api.setRowData(data);
      })
  }
}
