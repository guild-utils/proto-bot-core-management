defmodule Target do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          guild: String.t(),
          user: String.t()
        }

  defstruct [:guild, :user]

  field :guild, 1, type: :string
  field :user, 2, type: :string
end

defmodule UpdateResultError do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          message: String.t()
        }

  defstruct [:message]

  field :message, 1, type: :string
end

defmodule UpdateString do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          value_optional: {atom, any},
          target: Target.t() | nil
        }

  defstruct [:value_optional, :target]

  oneof :value_optional, 0
  field :target, 1, type: Target
  field :value, 2, type: :string, oneof: 0
end

defmodule UpdateResultStringOk do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          before_optional: {atom, any},
          after_optional: {atom, any}
        }

  defstruct [:before_optional, :after_optional]

  oneof :before_optional, 0
  oneof :after_optional, 1
  field :before, 1, type: :string, oneof: 0
  field :after, 2, type: :string, oneof: 1
end

defmodule UpdateResultStringSame do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          value_optional: {atom, any}
        }

  defstruct [:value_optional]

  oneof :value_optional, 0
  field :value, 1, type: :string, oneof: 0
end

defmodule UpdateResultString do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          updateResult: {atom, any}
        }

  defstruct [:updateResult]

  oneof :updateResult, 0
  field :resultOk, 1, type: UpdateResultStringOk, oneof: 0
  field :resultSame, 2, type: UpdateResultStringSame, oneof: 0
  field :error, 3, type: UpdateResultError, oneof: 0
end

defmodule UpdateFloat do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          value_optional: {atom, any},
          target: Target.t() | nil
        }

  defstruct [:value_optional, :target]

  oneof :value_optional, 0
  field :target, 1, type: Target
  field :value, 2, type: :float, oneof: 0
end

defmodule UpdateResultFloatOk do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          before_optional: {atom, any},
          after_optional: {atom, any}
        }

  defstruct [:before_optional, :after_optional]

  oneof :before_optional, 0
  oneof :after_optional, 1
  field :before, 1, type: :float, oneof: 0
  field :after, 2, type: :float, oneof: 1
end

defmodule UpdateResultFloatSame do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          value_optional: {atom, any}
        }

  defstruct [:value_optional]

  oneof :value_optional, 0
  field :value, 1, type: :float, oneof: 0
end

defmodule UpdateResultFloat do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          updateResult: {atom, any}
        }

  defstruct [:updateResult]

  oneof :updateResult, 0
  field :resultOk, 1, type: UpdateResultFloatOk, oneof: 0
  field :resultSame, 2, type: UpdateResultFloatSame, oneof: 0
  field :error, 3, type: UpdateResultError, oneof: 0
end

defmodule UpdateReadName do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          value_optional: {atom, any},
          target: Target.t() | nil
        }

  defstruct [:value_optional, :target]

  oneof :value_optional, 0
  field :target, 1, type: Target
  field :value_string, 2, type: :string, oneof: 0
  field :value_bool, 3, type: :bool, oneof: 0
end

defmodule UpdateReadNameOk do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          before_optional: {atom, any},
          after_optional: {atom, any}
        }

  defstruct [:before_optional, :after_optional]

  oneof :before_optional, 0
  oneof :after_optional, 1
  field :before_string, 1, type: :string, oneof: 0
  field :before_bool, 2, type: :bool, oneof: 0
  field :after_string, 3, type: :string, oneof: 1
  field :after_bool, 4, type: :bool, oneof: 1
end

defmodule UpdateResultReadNameSame do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          value_optional: {atom, any}
        }

  defstruct [:value_optional]

  oneof :value_optional, 0
  field :value_string, 1, type: :string, oneof: 0
  field :value_bool, 2, type: :bool, oneof: 0
end

defmodule UpdateResultReadName do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          updateResult: {atom, any}
        }

  defstruct [:updateResult]

  oneof :updateResult, 0
  field :resultOk, 1, type: UpdateReadNameOk, oneof: 0
  field :resultSame, 2, type: UpdateResultReadNameSame, oneof: 0
  field :error, 3, type: UpdateResultError, oneof: 0
end

defmodule UpdateUint32 do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          value_optional: {atom, any},
          target: Target.t() | nil
        }

  defstruct [:value_optional, :target]

  oneof :value_optional, 0
  field :target, 1, type: Target
  field :value, 2, type: :uint32, oneof: 0
end

defmodule UpdateResultUint32Ok do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          before_optional: {atom, any},
          after_optional: {atom, any}
        }

  defstruct [:before_optional, :after_optional]

  oneof :before_optional, 0
  oneof :after_optional, 1
  field :before, 1, type: :uint32, oneof: 0
  field :after, 2, type: :uint32, oneof: 1
end

defmodule UpdateResultUint32Same do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          value_optional: {atom, any}
        }

  defstruct [:value_optional]

  oneof :value_optional, 0
  field :value, 1, type: :uint32, oneof: 0
end

defmodule UpdateResultUint32 do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          updateResult: {atom, any}
        }

  defstruct [:updateResult]

  oneof :updateResult, 0
  field :resultOk, 1, type: UpdateResultUint32Ok, oneof: 0
  field :resultSame, 2, type: UpdateResultUint32Same, oneof: 0
  field :error, 3, type: UpdateResultError, oneof: 0
end

defmodule RemoveFromMainDictionary do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          guild: String.t(),
          key: String.t()
        }

  defstruct [:guild, :key]

  field :guild, 1, type: :string
  field :key, 2, type: :string
end

defmodule UpdateResultDictionaryEntryAOk do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          before_optional: {atom, any},
          after_optional: {atom, any}
        }

  defstruct [:before_optional, :after_optional]

  oneof :before_optional, 0
  oneof :after_optional, 1
  field :before, 1, type: Config.DictionaryEntryA, oneof: 0
  field :after, 2, type: Config.DictionaryEntryA, oneof: 1
end

defmodule UpdateResultDictionaryEntryASame do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          value_optional: {atom, any}
        }

  defstruct [:value_optional]

  oneof :value_optional, 0
  field :value, 1, type: Config.DictionaryEntryA, oneof: 0
end

defmodule UpdateResultDictionaryEntryA do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          updateResult: {atom, any}
        }

  defstruct [:updateResult]

  oneof :updateResult, 0
  field :resultOk, 1, type: UpdateResultDictionaryEntryAOk, oneof: 0
  field :resultSame, 2, type: UpdateResultDictionaryEntryASame, oneof: 0
  field :error, 3, type: UpdateResultError, oneof: 0
end

defmodule UpdateOrInsertMainDictionary do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          guild: String.t(),
          value: Config.DictionaryEntryA.t() | nil
        }

  defstruct [:guild, :value]

  field :guild, 1, type: :string
  field :value, 2, type: Config.DictionaryEntryA
end

defmodule SimpleDictionaryUpdateTargetGuild do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          guild: String.t()
        }

  defstruct [:guild]

  field :guild, 1, type: :string
end

defmodule SimpleDictionaryUpdateTargetSharedDictionary do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          id: String.t()
        }

  defstruct [:id]

  field :id, 1, type: :string
end

defmodule SimpleDictionaryUpdateTarget do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          target: {atom, any}
        }

  defstruct [:target]

  oneof :target, 0
  field :before, 1, type: SimpleDictionaryUpdateTargetGuild, oneof: 0
  field :after, 2, type: SimpleDictionaryUpdateTargetGuild, oneof: 0
  field :shared, 3, type: SimpleDictionaryUpdateTargetSharedDictionary, oneof: 0
end

defmodule UpdateSimpleDictionary do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          target: SimpleDictionaryUpdateTarget.t() | nil,
          value: Config.DictionaryEntryB.t() | nil
        }

  defstruct [:target, :value]

  field :target, 1, type: SimpleDictionaryUpdateTarget
  field :value, 2, type: Config.DictionaryEntryB
end

defmodule InsertSimpleDictionary do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          target: SimpleDictionaryUpdateTarget.t() | nil,
          value: Config.DictionaryEntryB.t() | nil
        }

  defstruct [:target, :value]

  field :target, 1, type: SimpleDictionaryUpdateTarget
  field :value, 2, type: Config.DictionaryEntryB
end

defmodule AddSimpleDictionary do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          target: SimpleDictionaryUpdateTarget.t() | nil,
          from: String.t(),
          to: String.t()
        }

  defstruct [:target, :from, :to]

  field :target, 1, type: SimpleDictionaryUpdateTarget
  field :from, 2, type: :string
  field :to, 3, type: :string
end

defmodule RemoveSimpleDictionary do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          target: SimpleDictionaryUpdateTarget.t() | nil,
          index: non_neg_integer
        }

  defstruct [:target, :index]

  field :target, 1, type: SimpleDictionaryUpdateTarget
  field :index, 2, type: :uint32
end

defmodule UpdateResultDictionaryEntryBOk do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          before_optional: {atom, any},
          after_optional: {atom, any}
        }

  defstruct [:before_optional, :after_optional]

  oneof :before_optional, 0
  oneof :after_optional, 1
  field :before, 1, type: Config.DictionaryEntryB, oneof: 0
  field :after, 2, type: Config.DictionaryEntryB, oneof: 1
end

defmodule UpdateResultDictionaryEntryBSame do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          value_optional: {atom, any}
        }

  defstruct [:value_optional]

  oneof :value_optional, 0
  field :value, 1, type: Config.DictionaryEntryB, oneof: 0
end

defmodule UpdateResultDictionaryEntryB do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          updateResult: {atom, any}
        }

  defstruct [:updateResult]

  oneof :updateResult, 0
  field :resultOk, 1, type: UpdateResultDictionaryEntryBOk, oneof: 0
  field :resultSame, 2, type: UpdateResultDictionaryEntryBSame, oneof: 0
  field :error, 3, type: UpdateResultError, oneof: 0
end

defmodule MoveSimpleDictionary do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          target: SimpleDictionaryUpdateTarget.t() | nil,
          from: non_neg_integer,
          to: non_neg_integer
        }

  defstruct [:target, :from, :to]

  field :target, 1, type: SimpleDictionaryUpdateTarget
  field :from, 2, type: :uint32
  field :to, 3, type: :uint32
end

defmodule MoveSimpleDictionaryResultOk do
  @moduledoc false
  use Protobuf, syntax: :proto3
  @type t :: %__MODULE__{}

  defstruct []
end

defmodule MoveSimpleDictionaryResult do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          result: {atom, any}
        }

  defstruct [:result]

  oneof :result, 0
  field :resultOk, 1, type: MoveSimpleDictionaryResultOk, oneof: 0
  field :error, 2, type: UpdateResultError, oneof: 0
end

defmodule ConfigSetter.Service do
  @moduledoc false
  use GRPC.Service, name: "ConfigSetter"

  rpc :updateKind, UpdateString, UpdateResultString

  rpc :updateReadName, UpdateReadName, UpdateResultReadName

  rpc :updateSpeed, UpdateFloat, UpdateResultFloat

  rpc :updateTone, UpdateFloat, UpdateResultFloat

  rpc :updateVolume, UpdateFloat, UpdateResultFloat

  rpc :updateAllpass, UpdateFloat, UpdateResultFloat

  rpc :updateIntone, UpdateFloat, UpdateResultFloat

  rpc :updateThreshold, UpdateFloat, UpdateResultFloat

  rpc :updateRandomizer, UpdateString, UpdateResultFloat

  rpc :updateMaxReadLimit, UpdateUint32, UpdateResultUint32

  rpc :updateMaxVolume, UpdateUint32, UpdateResultUint32

  rpc :updateOrInsertMainDictionary, UpdateOrInsertMainDictionary, UpdateResultDictionaryEntryA

  rpc :removeMainDictionary, RemoveFromMainDictionary, UpdateResultDictionaryEntryA

  rpc :updateSimpleDictionary, UpdateSimpleDictionary, UpdateResultDictionaryEntryB

  rpc :insertSimpleDictionary, InsertSimpleDictionary, UpdateResultDictionaryEntryB

  rpc :addSimpleDictionary, AddSimpleDictionary, UpdateResultDictionaryEntryB

  rpc :removeSimpleDictionary, RemoveSimpleDictionary, UpdateResultDictionaryEntryB

  rpc :moveSimpleDictionary, MoveSimpleDictionary, MoveSimpleDictionaryResult
end

defmodule ConfigSetter.Stub do
  @moduledoc false
  use GRPC.Stub, service: ConfigSetter.Service
end
