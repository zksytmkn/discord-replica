export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      channels: {
        Row: {
          created_at: string;
          id: number;
          name: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      messages: {
        Row: {
          channel_id: number | null;
          created_at: string;
          id: number;
          message: string;
          user: Users | null;
        };
        Insert: {
          channel_id?: number | null;
          created_at?: string;
          id?: number;
          message: string;
          user?: Users | null;
        };
        Update: {
          channel_id?: number | null;
          created_at?: string;
          id?: number;
          message?: string;
          user?: Users | null;
        };
        Relationships: [
          {
            foreignKeyName: "messages_channel_id_fkey";
            columns: ["channel_id"];
            isOneToOne: false;
            referencedRelation: "channels";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "messages_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      users: {
        Row: {
          avatar_url: string | null;
          id: string;
          name: string | null;
        };
        Insert: {
          avatar_url?: string | null;
          id: string;
          name?: string | null;
        };
        Update: {
          avatar_url?: string | null;
          id?: string;
          name?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "users_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

// Schema: public
// Tables
export type Channels = Database["public"]["Tables"]["channels"]["Row"];
export type InsertChannels = Database["public"]["Tables"]["channels"]["Insert"];
export type UpdateChannels = Database["public"]["Tables"]["channels"]["Update"];

export type Messages = Database["public"]["Tables"]["messages"]["Row"];
export type InsertMessages = Database["public"]["Tables"]["messages"]["Insert"];
export type UpdateMessages = Database["public"]["Tables"]["messages"]["Update"];

export type Users = Database["public"]["Tables"]["users"]["Row"];
export type InsertUsers = Database["public"]["Tables"]["users"]["Insert"];
export type UpdateUsers = Database["public"]["Tables"]["users"]["Update"];
