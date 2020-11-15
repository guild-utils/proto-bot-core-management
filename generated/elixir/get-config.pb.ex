defmodule ManagementApp.Config.Get.VoiceConfigUpdateInfoType do
  @moduledoc false
  use Protobuf, enum: true, syntax: :proto3
  @type t :: integer | :UNKNOWN | :GUILD | :USER | :MEMBER

  field :UNKNOWN, 0

  field :GUILD, 1

  field :USER, 2

  field :MEMBER, 3
end

defmodule ManagementApp.Config.Get.LayeredVoiceConfig do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          kind_optional: {atom, any},
          readName_optional: {atom, any},
          speed_optional: {atom, any},
          tone_optional: {atom, any},
          volume_optional: {atom, any},
          allpass_optional: {atom, any},
          intone_optional: {atom, any},
          threshold_optional: {atom, any},
          randomizer_optional: {atom, any}
        }

  defstruct [
    :kind_optional,
    :readName_optional,
    :speed_optional,
    :tone_optional,
    :volume_optional,
    :allpass_optional,
    :intone_optional,
    :threshold_optional,
    :randomizer_optional
  ]

  oneof :kind_optional, 0
  oneof :readName_optional, 1
  oneof :speed_optional, 2
  oneof :tone_optional, 3
  oneof :volume_optional, 4
  oneof :allpass_optional, 5
  oneof :intone_optional, 6
  oneof :threshold_optional, 7
  oneof :randomizer_optional, 8
  field :kind, 1, type: :string, oneof: 0
  field :readName, 2, type: :string, oneof: 1
  field :speed, 3, type: :float, oneof: 2
  field :tone, 4, type: :float, oneof: 3
  field :volume, 5, type: :float, oneof: 4
  field :allpass, 6, type: :float, oneof: 5
  field :intone, 7, type: :float, oneof: 6
  field :threshold, 8, type: :float, oneof: 7
  field :randomizer, 9, type: :string, oneof: 8
end

defmodule ManagementApp.Config.Get.GuildVoiceConfig do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          maxReadLimit_optional: {atom, any},
          maxVolume_optional: {atom, any},
          readName_optional: {atom, any},
          randomizer_optional: {atom, any},
          dictionary: ManagementApp.Config.Common.Dictionary.t() | nil
        }

  defstruct [
    :maxReadLimit_optional,
    :maxVolume_optional,
    :readName_optional,
    :randomizer_optional,
    :dictionary
  ]

  oneof :maxReadLimit_optional, 0
  oneof :maxVolume_optional, 1
  oneof :readName_optional, 2
  oneof :randomizer_optional, 3
  field :maxReadLimit, 1, type: :uint32, oneof: 0
  field :maxVolume, 2, type: :uint32, oneof: 1
  field :readName, 3, type: :bool, oneof: 2
  field :randomizer, 4, type: :string, oneof: 3
  field :dictionary, 5, type: ManagementApp.Config.Common.Dictionary
end

defmodule ManagementApp.Config.Get.LayeredVoiceConfigRequest do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          user: String.t(),
          guild: String.t()
        }

  defstruct [:user, :guild]

  field :user, 1, type: :string
  field :guild, 2, type: :string
end

defmodule ManagementApp.Config.Get.GuildVoiceConfigRequest do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          guild: String.t()
        }

  defstruct [:guild]

  field :guild, 1, type: :string
end

defmodule ManagementApp.Config.Get.ReadNameRequest do
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

defmodule ManagementApp.Config.Get.ReadName do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          value_optional: {atom, any}
        }

  defstruct [:value_optional]

  oneof :value_optional, 0
  field :value, 1, type: :string, oneof: 0
end

defmodule ManagementApp.Config.Get.ShardInfo do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          numShards: non_neg_integer,
          shardId: non_neg_integer
        }

  defstruct [:numShards, :shardId]

  field :numShards, 1, type: :uint32
  field :shardId, 2, type: :uint32
end

defmodule ManagementApp.Config.Get.VoiceConfigUpdateStreamRequest do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          shard: ManagementApp.Config.Get.ShardInfo.t() | nil
        }

  defstruct [:shard]

  field :shard, 1, type: ManagementApp.Config.Get.ShardInfo
end

defmodule ManagementApp.Config.Get.VoiceConfigUpdateInfo do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          type: ManagementApp.Config.Get.VoiceConfigUpdateInfoType.t(),
          guild: String.t(),
          user: String.t()
        }

  defstruct [:type, :guild, :user]

  field :type, 1, type: ManagementApp.Config.Get.VoiceConfigUpdateInfoType, enum: true
  field :guild, 2, type: :string
  field :user, 3, type: :string
end

defmodule ManagementApp.Config.Get.ConfigGetter.Service do
  @moduledoc false
  use GRPC.Service, name: "management_app.config.get.ConfigGetter"

  rpc :guildVoiceConfig,
      ManagementApp.Config.Get.GuildVoiceConfigRequest,
      ManagementApp.Config.Get.GuildVoiceConfig

  rpc :layeredVoiceConfig,
      ManagementApp.Config.Get.LayeredVoiceConfigRequest,
      ManagementApp.Config.Get.LayeredVoiceConfig

  rpc :readName, ManagementApp.Config.Get.ReadNameRequest, ManagementApp.Config.Get.ReadName

  rpc :updateStream,
      ManagementApp.Config.Get.VoiceConfigUpdateStreamRequest,
      stream(ManagementApp.Config.Get.VoiceConfigUpdateInfo)
end

defmodule ManagementApp.Config.Get.ConfigGetter.Stub do
  @moduledoc false
  use GRPC.Stub, service: ManagementApp.Config.Get.ConfigGetter.Service
end
