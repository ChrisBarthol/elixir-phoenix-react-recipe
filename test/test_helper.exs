ExUnit.start

Mix.Task.run "ecto.create", ~w(-r Recipe.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r Recipe.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(Recipe.Repo)

