defmodule ProtoBotCoreManagement.Mixfile do
  use Mix.Project

  def project do
    [
      app: :proto_bot_core_management,
      version: "0.1.0",
      elixir: "~> 1.0",
      start_permanent: Mix.env() == :prod,
      deps: deps(),
      package: package()
    ]
  end

  def application do
    [
      extra_applications: [:logger]
    ]
  end

  defp deps do
    [
      {:protobuf, "~> 0.7.1"},
      # Only for files generated from Google's protos.
      # Can be ignored if you don't use Google's protos.
      # Or you can generate the code by yourself.
      {:google_protos, "~> 0.1"}
    ]
  end
  defp package do
    %{
      maintainers: ["tignear"],
      licenses: ["Unlicense"],
      links: %{"GitHub" => "https://github.com/guild-utils/proto-bot-core-management"},
      files: ~w(mix.exs generated/elixir protos)
    }
  end
end
