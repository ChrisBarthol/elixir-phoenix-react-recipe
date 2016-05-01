defmodule Recipe.PageController do
  use Recipe.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
