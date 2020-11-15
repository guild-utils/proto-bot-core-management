defmodule Config.DictionaryEntryA do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          from: String.t(),
          to: String.t(),
          p: String.t(),
          p1: String.t(),
          p2: String.t(),
          p3: String.t()
        }

  defstruct [:from, :to, :p, :p1, :p2, :p3]

  field :from, 1, type: :string
  field :to, 2, type: :string
  field :p, 3, type: :string
  field :p1, 4, type: :string
  field :p2, 5, type: :string
  field :p3, 6, type: :string
end

defmodule Config.DictionaryEntryB do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          from: String.t(),
          to: String.t(),
          index: non_neg_integer
        }

  defstruct [:from, :to, :index]

  field :from, 1, type: :string
  field :to, 2, type: :string
  field :index, 3, type: :uint32
end

defmodule Config.Dictionary do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          before: [Config.DictionaryEntryB.t()],
          entrys: [Config.DictionaryEntryA.t()],
          after: [Config.DictionaryEntryB.t()]
        }

  defstruct [:before, :entrys, :after]

  field :before, 2, repeated: true, type: Config.DictionaryEntryB
  field :entrys, 1, repeated: true, type: Config.DictionaryEntryA
  field :after, 3, repeated: true, type: Config.DictionaryEntryB
end
