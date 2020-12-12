defmodule ManagementApp.Config.Set.Target do
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

defmodule ManagementApp.Config.Set.UpdateResultError do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          message: String.t()
        }

  defstruct [:message]

  field :message, 1, type: :string
end

defmodule ManagementApp.Config.Set.UpdateString do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          value_optional: {atom, any},
          target: ManagementApp.Config.Set.Target.t() | nil
        }

  defstruct [:value_optional, :target]

  oneof :value_optional, 0
  field :target, 1, type: ManagementApp.Config.Set.Target
  field :value, 2, type: :string, oneof: 0
end

defmodule ManagementApp.Config.Set.UpdateResultStringOk do
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

defmodule ManagementApp.Config.Set.UpdateResultStringSame do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          value_optional: {atom, any}
        }

  defstruct [:value_optional]

  oneof :value_optional, 0
  field :value, 1, type: :string, oneof: 0
end

defmodule ManagementApp.Config.Set.UpdateResultString do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          updateResult: {atom, any}
        }

  defstruct [:updateResult]

  oneof :updateResult, 0
  field :resultOk, 1, type: ManagementApp.Config.Set.UpdateResultStringOk, oneof: 0
  field :resultSame, 2, type: ManagementApp.Config.Set.UpdateResultStringSame, oneof: 0
  field :error, 3, type: ManagementApp.Config.Set.UpdateResultError, oneof: 0
end

defmodule ManagementApp.Config.Set.UpdateFloat do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          value_optional: {atom, any},
          target: ManagementApp.Config.Set.Target.t() | nil
        }

  defstruct [:value_optional, :target]

  oneof :value_optional, 0
  field :target, 1, type: ManagementApp.Config.Set.Target
  field :value, 2, type: :float, oneof: 0
end

defmodule ManagementApp.Config.Set.UpdateResultFloatOk do
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

defmodule ManagementApp.Config.Set.UpdateResultFloatSame do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          value_optional: {atom, any}
        }

  defstruct [:value_optional]

  oneof :value_optional, 0
  field :value, 1, type: :float, oneof: 0
end

defmodule ManagementApp.Config.Set.UpdateResultFloat do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          updateResult: {atom, any}
        }

  defstruct [:updateResult]

  oneof :updateResult, 0
  field :resultOk, 1, type: ManagementApp.Config.Set.UpdateResultFloatOk, oneof: 0
  field :resultSame, 2, type: ManagementApp.Config.Set.UpdateResultFloatSame, oneof: 0
  field :error, 3, type: ManagementApp.Config.Set.UpdateResultError, oneof: 0
end

defmodule ManagementApp.Config.Set.UpdateReadName do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          value_optional: {atom, any},
          target: ManagementApp.Config.Set.Target.t() | nil
        }

  defstruct [:value_optional, :target]

  oneof :value_optional, 0
  field :target, 1, type: ManagementApp.Config.Set.Target
  field :value_string, 2, type: :string, oneof: 0
  field :value_bool, 3, type: :bool, oneof: 0
end

defmodule ManagementApp.Config.Set.UpdateReadNameOk do
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

defmodule ManagementApp.Config.Set.UpdateResultReadNameSame do
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

defmodule ManagementApp.Config.Set.UpdateResultReadName do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          updateResult: {atom, any}
        }

  defstruct [:updateResult]

  oneof :updateResult, 0
  field :resultOk, 1, type: ManagementApp.Config.Set.UpdateReadNameOk, oneof: 0
  field :resultSame, 2, type: ManagementApp.Config.Set.UpdateResultReadNameSame, oneof: 0
  field :error, 3, type: ManagementApp.Config.Set.UpdateResultError, oneof: 0
end

defmodule ManagementApp.Config.Set.UpdateUint32 do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          value_optional: {atom, any},
          target: ManagementApp.Config.Set.Target.t() | nil
        }

  defstruct [:value_optional, :target]

  oneof :value_optional, 0
  field :target, 1, type: ManagementApp.Config.Set.Target
  field :value, 2, type: :uint32, oneof: 0
end

defmodule ManagementApp.Config.Set.UpdateResultUint32Ok do
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

defmodule ManagementApp.Config.Set.UpdateResultUint32Same do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          value_optional: {atom, any}
        }

  defstruct [:value_optional]

  oneof :value_optional, 0
  field :value, 1, type: :uint32, oneof: 0
end

defmodule ManagementApp.Config.Set.UpdateResultUint32 do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          updateResult: {atom, any}
        }

  defstruct [:updateResult]

  oneof :updateResult, 0
  field :resultOk, 1, type: ManagementApp.Config.Set.UpdateResultUint32Ok, oneof: 0
  field :resultSame, 2, type: ManagementApp.Config.Set.UpdateResultUint32Same, oneof: 0
  field :error, 3, type: ManagementApp.Config.Set.UpdateResultError, oneof: 0
end

defmodule ManagementApp.Config.Set.AnalysisDictionaryUpdateTarget do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          id: String.t()
        }

  defstruct [:id]

  field :id, 1, type: :string
end

defmodule ManagementApp.Config.Set.RemoveFromAnalysisDictionary do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          target: ManagementApp.Config.Set.AnalysisDictionaryUpdateTarget.t() | nil,
          key: String.t()
        }

  defstruct [:target, :key]

  field :target, 1, type: ManagementApp.Config.Set.AnalysisDictionaryUpdateTarget
  field :key, 2, type: :string
end

defmodule ManagementApp.Config.Set.UpdateResultDictionaryEntryAOk do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          before_optional: {atom, any},
          after_optional: {atom, any}
        }

  defstruct [:before_optional, :after_optional]

  oneof :before_optional, 0
  oneof :after_optional, 1
  field :before, 1, type: ManagementApp.Config.Common.DictionaryEntryA, oneof: 0
  field :after, 2, type: ManagementApp.Config.Common.DictionaryEntryA, oneof: 1
end

defmodule ManagementApp.Config.Set.UpdateResultDictionaryEntryASame do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          value_optional: {atom, any}
        }

  defstruct [:value_optional]

  oneof :value_optional, 0
  field :value, 1, type: ManagementApp.Config.Common.DictionaryEntryA, oneof: 0
end

defmodule ManagementApp.Config.Set.UpdateResultDictionaryEntryA do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          updateResult: {atom, any}
        }

  defstruct [:updateResult]

  oneof :updateResult, 0
  field :resultOk, 1, type: ManagementApp.Config.Set.UpdateResultDictionaryEntryAOk, oneof: 0
  field :resultSame, 2, type: ManagementApp.Config.Set.UpdateResultDictionaryEntryASame, oneof: 0
  field :error, 3, type: ManagementApp.Config.Set.UpdateResultError, oneof: 0
end

defmodule ManagementApp.Config.Set.UpdateOrInsertAnalysisDictionary do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          id: ManagementApp.Config.Set.AnalysisDictionaryUpdateTarget.t() | nil,
          value: ManagementApp.Config.Common.DictionaryEntryA.t() | nil
        }

  defstruct [:id, :value]

  field :id, 1, type: ManagementApp.Config.Set.AnalysisDictionaryUpdateTarget
  field :value, 2, type: ManagementApp.Config.Common.DictionaryEntryA
end

defmodule ManagementApp.Config.Set.SimpleDictionaryUpdateTarget do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          id: String.t()
        }

  defstruct [:id]

  field :id, 1, type: :string
end

defmodule ManagementApp.Config.Set.UpdateSimpleDictionary do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          target: ManagementApp.Config.Set.SimpleDictionaryUpdateTarget.t() | nil,
          value: ManagementApp.Config.Common.DictionaryEntryB.t() | nil
        }

  defstruct [:target, :value]

  field :target, 1, type: ManagementApp.Config.Set.SimpleDictionaryUpdateTarget
  field :value, 2, type: ManagementApp.Config.Common.DictionaryEntryB
end

defmodule ManagementApp.Config.Set.InsertSimpleDictionary do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          target: ManagementApp.Config.Set.SimpleDictionaryUpdateTarget.t() | nil,
          value: ManagementApp.Config.Common.DictionaryEntryB.t() | nil
        }

  defstruct [:target, :value]

  field :target, 1, type: ManagementApp.Config.Set.SimpleDictionaryUpdateTarget
  field :value, 2, type: ManagementApp.Config.Common.DictionaryEntryB
end

defmodule ManagementApp.Config.Set.AddSimpleDictionary do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          target: ManagementApp.Config.Set.SimpleDictionaryUpdateTarget.t() | nil,
          from: String.t(),
          to: String.t()
        }

  defstruct [:target, :from, :to]

  field :target, 1, type: ManagementApp.Config.Set.SimpleDictionaryUpdateTarget
  field :from, 2, type: :string
  field :to, 3, type: :string
end

defmodule ManagementApp.Config.Set.RemoveSimpleDictionary do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          target: ManagementApp.Config.Set.SimpleDictionaryUpdateTarget.t() | nil,
          index: non_neg_integer
        }

  defstruct [:target, :index]

  field :target, 1, type: ManagementApp.Config.Set.SimpleDictionaryUpdateTarget
  field :index, 2, type: :uint32
end

defmodule ManagementApp.Config.Set.UpdateResultDictionaryEntryBOk do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          before_optional: {atom, any},
          after_optional: {atom, any}
        }

  defstruct [:before_optional, :after_optional]

  oneof :before_optional, 0
  oneof :after_optional, 1
  field :before, 1, type: ManagementApp.Config.Common.DictionaryEntryB, oneof: 0
  field :after, 2, type: ManagementApp.Config.Common.DictionaryEntryB, oneof: 1
end

defmodule ManagementApp.Config.Set.UpdateResultDictionaryEntryBSame do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          value_optional: {atom, any}
        }

  defstruct [:value_optional]

  oneof :value_optional, 0
  field :value, 1, type: ManagementApp.Config.Common.DictionaryEntryB, oneof: 0
end

defmodule ManagementApp.Config.Set.UpdateResultDictionaryEntryB do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          updateResult: {atom, any}
        }

  defstruct [:updateResult]

  oneof :updateResult, 0
  field :resultOk, 1, type: ManagementApp.Config.Set.UpdateResultDictionaryEntryBOk, oneof: 0
  field :resultSame, 2, type: ManagementApp.Config.Set.UpdateResultDictionaryEntryBSame, oneof: 0
  field :error, 3, type: ManagementApp.Config.Set.UpdateResultError, oneof: 0
end

defmodule ManagementApp.Config.Set.MoveSimpleDictionary do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          target: ManagementApp.Config.Set.SimpleDictionaryUpdateTarget.t() | nil,
          from: non_neg_integer,
          to: non_neg_integer
        }

  defstruct [:target, :from, :to]

  field :target, 1, type: ManagementApp.Config.Set.SimpleDictionaryUpdateTarget
  field :from, 2, type: :uint32
  field :to, 3, type: :uint32
end

defmodule ManagementApp.Config.Set.MoveSimpleDictionaryResultOk do
  @moduledoc false
  use Protobuf, syntax: :proto3
  @type t :: %__MODULE__{}

  defstruct []
end

defmodule ManagementApp.Config.Set.MoveSimpleDictionaryResult do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          result: {atom, any}
        }

  defstruct [:result]

  oneof :result, 0
  field :resultOk, 1, type: ManagementApp.Config.Set.MoveSimpleDictionaryResultOk, oneof: 0
  field :error, 2, type: ManagementApp.Config.Set.UpdateResultError, oneof: 0
end

defmodule ManagementApp.Config.Set.ConfigSetter.Service do
  @moduledoc false
  use GRPC.Service, name: "management_app.config.set.ConfigSetter"

  rpc :updateKind,
      ManagementApp.Config.Set.UpdateString,
      ManagementApp.Config.Set.UpdateResultString

  rpc :updateReadName,
      ManagementApp.Config.Set.UpdateReadName,
      ManagementApp.Config.Set.UpdateResultReadName

  rpc :updateSpeed,
      ManagementApp.Config.Set.UpdateFloat,
      ManagementApp.Config.Set.UpdateResultFloat

  rpc :updateTone,
      ManagementApp.Config.Set.UpdateFloat,
      ManagementApp.Config.Set.UpdateResultFloat

  rpc :updateVolume,
      ManagementApp.Config.Set.UpdateFloat,
      ManagementApp.Config.Set.UpdateResultFloat

  rpc :updateAllpass,
      ManagementApp.Config.Set.UpdateFloat,
      ManagementApp.Config.Set.UpdateResultFloat

  rpc :updateIntone,
      ManagementApp.Config.Set.UpdateFloat,
      ManagementApp.Config.Set.UpdateResultFloat

  rpc :updateThreshold,
      ManagementApp.Config.Set.UpdateFloat,
      ManagementApp.Config.Set.UpdateResultFloat

  rpc :updateRandomizer,
      ManagementApp.Config.Set.UpdateString,
      ManagementApp.Config.Set.UpdateResultString

  rpc :updateMaxReadLimit,
      ManagementApp.Config.Set.UpdateUint32,
      ManagementApp.Config.Set.UpdateResultUint32

  rpc :updateMaxVolume,
      ManagementApp.Config.Set.UpdateUint32,
      ManagementApp.Config.Set.UpdateResultUint32

  rpc :updateOrInsertAnalysisDictionary,
      ManagementApp.Config.Set.UpdateOrInsertAnalysisDictionary,
      ManagementApp.Config.Set.UpdateResultDictionaryEntryA

  rpc :removeAnalysisDictionary,
      ManagementApp.Config.Set.RemoveFromAnalysisDictionary,
      ManagementApp.Config.Set.UpdateResultDictionaryEntryA

  rpc :updateSimpleDictionary,
      ManagementApp.Config.Set.UpdateSimpleDictionary,
      ManagementApp.Config.Set.UpdateResultDictionaryEntryB

  rpc :insertSimpleDictionary,
      ManagementApp.Config.Set.InsertSimpleDictionary,
      ManagementApp.Config.Set.UpdateResultDictionaryEntryB

  rpc :addSimpleDictionary,
      ManagementApp.Config.Set.AddSimpleDictionary,
      ManagementApp.Config.Set.UpdateResultDictionaryEntryB

  rpc :removeSimpleDictionary,
      ManagementApp.Config.Set.RemoveSimpleDictionary,
      ManagementApp.Config.Set.UpdateResultDictionaryEntryB

  rpc :moveSimpleDictionary,
      ManagementApp.Config.Set.MoveSimpleDictionary,
      ManagementApp.Config.Set.MoveSimpleDictionaryResult
end

defmodule ManagementApp.Config.Set.ConfigSetter.Stub do
  @moduledoc false
  use GRPC.Stub, service: ManagementApp.Config.Set.ConfigSetter.Service
end
